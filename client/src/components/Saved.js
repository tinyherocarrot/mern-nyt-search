import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import API from "../utils/API";

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount = () => {
    this.loadSaved();
  };

  loadSaved = () => {
    API.getSaved()
      .then(res => this.setState({ savedArticles: res.data }))
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    API.deleteSaved(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <section className="section" id="saved-section">
          <div className="box">
            {this.state.savedArticles.length ? (
              <ul>
                {this.state.savedArticles.map((item, i) => {
                  return (
                    <li key={i}>
                      <div className="box">
                        <DeleteBtn
                          onClick={() => this.handleDelete(item._id)}
                        />
                        <h1>
                          <a href={item.url} target="_blank">
                            <strong>{item.title}</strong>
                          </a>
                        </h1>
                        <p>Saved: {item.date}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No saved articles</p>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default Saved;
