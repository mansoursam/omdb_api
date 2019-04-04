import React, { Component } from "react";
import "../App.css";
import ModalDetail from "./modalDetail";
import axios from "axios";
class Movie extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      detail: ""
    };
  }
  // componentDidMount() {
  //   document.addEventListener("DOMContentLoaded", function() {
  //     var elems = document.querySelectorAll("select");
  //     var instances = M.FormSelect.init(elems, options);
  //   });
  // }
  getMovie = event => {
    event.preventDefault();
    console.log(event.target.title.value);
    let movieTitle = event.target.title.value;
    let type = event.target.type.value;
    let year = event.target.year.value;
    console.log(type);

    /** Based on movie title show me the list of movies
     *  from REST API: omdb using fetch or axios
     */
    let websiteName = "http://www.omdbapi.com/?s=";
    let apiKey = "7ab2ce53";
    let fullUrl = `${websiteName}${movieTitle}&type=${type}&y=${year}&apikey=${apiKey}&plot=full`;
    fetch(fullUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.Search);
        this.setState({
          items: data.Search
        });
      });
  };
  movieSelect = id => {
    sessionStorage.setItem("movieID", id.trim());
    console.log(id.trim());
    this.getDetails();
    return false;
  };
  getDetails = () => {
    let movieId = sessionStorage.getItem("movieID");
    console.log(movieId);
    let apiKey = "7ab2ce53";
    let movieDetails = `http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`;

    fetch(movieDetails).then(res => {
      res.json().then(response => {
        console.log(response);
        this.setState({
          detail: response
        });
      });
    });
  };
  render() {
    let items = this.state.items;
    return (
      <div className="mt-5">
        <h4 className="text-center m-5">
          Searching your favorite movie, serie or game
          <span className="text-danger">...</span>
        </h4>
        <form onSubmit={this.getMovie} className="searchBox">
          <div>
            <input
              required
              type="text"
              name="title"
              className="form-control"
              placeholder="Search ..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <br />
            <div>
              <select className="custom-select" name="type">
                <option disabled selected>
                  Choose your Genre
                </option>
                <option value="movie">Movie</option>
                <option value="series">Serie</option>
                <option value="game">Game</option>
              </select>
            </div>
            <input
              type="text"
              name="year"
              className="form-control mb-2 mt-2"
              placeholder="Year..."
              aria-label="Year..."
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-info m-auto" type="submit">
                Search <i className="fas fa-search " />
              </button>
            </div>
          </div>
        </form>
        <div className="d-flex flex-wrap w-100  justify-content-center">
          {items.map(item => {
            return (
              <div key={item.imdbID} className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top "
                    src={item.Poster}
                    style={{ width: "100%", height: "400px" }}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>{item.Title}</b>
                    </h5>
                    <p className="card-text">
                      <b>Year: </b>
                      {item.Year}
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className=" detailsBtn">
                      <button
                        onClick={() => this.movieSelect(`${item.imdbID}`)}
                        type="button"
                        className="btn btn-secondary mb-0"
                        data-toggle="modal"
                        data-target=".bd-example-modal-xl"
                      >
                        Movie details
                      </button>
                    </div>
                    <ModalDetail detail={this.state.detail} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Movie;
