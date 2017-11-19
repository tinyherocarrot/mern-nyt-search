import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
// import API from "../utils/API";

class Saved extends Component {
  handleDelete = id => {
    this.props.handleDelete(id);
  };

  render() {
    return (
      <div>
        <section className="section" id="saved-section">
          <div className="box">
            <h5 className="title is-5">Saved Articles</h5>
            {this.props.savedArticles.length ? (
              <ul>
                {this.props.savedArticles.map((item, i) => {
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
