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
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">NYT Article Finder</h1>
              <h2 class="subtitle">Search and save articles like a winner.</h2>
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
