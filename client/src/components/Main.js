import React from "react";
import Hero from "./Hero";
import Saved from "./Saved";
import Search from "./Search";
import API from "../utils/API";

class Main extends React.Component {
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

  handleSave = (title, url) => {
    API.saveArticle({
      title: title,
      url: url
    }).then(() => this.loadSaved());
  };

  handleDelete = id => {
    API.deleteSaved(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Hero />
        <Search handleSave={this.handleSave} />
        <Saved
          savedArticles={this.state.savedArticles}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Main;
