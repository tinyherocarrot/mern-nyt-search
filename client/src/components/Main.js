import React, { Component } from "react";
import Saved from "./Saved";
import Search from "./Search";

class Main extends Component {
  state = {
    articles: [],
    search: ""
  };

  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">NYT Article Finder</h1>
              <h2 className="subtitle">
                Search and save articles like a winner.
              </h2>
            </div>
          </div>
        </section>
        <Search />
        <Saved />
      </div>
    );
  }
}

export default Main;
