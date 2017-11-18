import React, { Component } from "react";
import Hero from "./Hero";
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
        <Hero />
        <Search />
        <Saved />
      </div>
    );
  }
}

export default Main;
