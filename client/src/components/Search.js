import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startYr: "",
    endYr: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      API.getArticles()
        .then(res => this.setState({ articles: res.data }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <section className="section" id="search-section">
          <div className="box">
            <div className="field">
              <label className="label">Topic</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Search by topic"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="field-body">
              <div className="field">
                <label className="label">Start Year</label>
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Start Year"
                    onChange={this.handleInputChange}
                  />
                </p>
                <p className="help">(Optional)</p>
              </div>

              <div className="field">
                <label className="label">End Year</label>
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="End Year"
                    onChange={this.handleInputChange}
                  />
                </p>
                <p className="help">(Optional)</p>
              </div>
            </div>

            <div className="control has-text-right">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </section>

        <section className="section" id="results-section">
          <div className="box">
            {this.state.articles.length ? (
              <ul>{this.state.articles.map(item => {})}</ul>
            ) : (
              <p> No Results to Display</p>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
