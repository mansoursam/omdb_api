import React, { Component } from "react";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.detail.imdbID);
    let movieID = this.props.detail.imdbID;
    console.log(movieID);

    return (
      <div
        className="modal fade bd-example-modal-xl"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="row">
              <div className="col-md-4">
                <img src={this.props.detail.Poster} className="thumbnail" />
              </div>
              <div className="col-md-8 ">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h2>{this.props.detail.Title}</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Genre:</strong> {this.props.detail.Genre}
                  </li>
                  <li className="list-group-item">
                    <strong>Released:</strong> {this.props.detail.Released}
                  </li>
                  <li className="list-group-item">
                    <strong>Runtime:</strong> {this.props.detail.Runtime}
                  </li>
                  <li className="list-group-item">
                    <strong>IMDB Rating:</strong> {this.props.detail.imdbRating}
                  </li>
                  <li className="list-group-item">
                    <strong>Director:</strong> {this.props.detail.Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Writer:</strong> {this.props.detail.Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Actors:</strong> {this.props.detail.Actors}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="plot">
                <h3>Plot</h3>
                <p>{this.props.detail.Plot}</p>
                <hr />
                <a
                  href={`http://imdb.com/title/${this.props.detail.imdbID}`}
                  target="_blank"
                  className="btn btn-primary"
                >
                  View IMDB
                </a>
                <a href="/movies" className="btn btn-primary ml-1">
                  Go Back To Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
