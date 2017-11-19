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
      API.getArticles(this.state.topic, this.state.startYr, this.state.endYr)
        .then(res => {
          console.log(res.data.response.docs);
          this.setState({ articles: res.data.response.docs });
        })
        .catch(err => console.log(err));
    }
  };

  handleSave = (title, url) => {
    console.log(title, url);
  };
  handleDelete = () => {};

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
                  name="topic"
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
                    name="startYr"
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
                    name="endYr"
                    onChange={this.handleInputChange}
                  />
                </p>
                <p className="help">(Optional)</p>
              </div>
            </div>

            <div className="control has-text-right">
              <button
                className="button is-link"
                onClick={this.handleFormSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="results-section">
          <div className="box">
            {this.state.articles.length ? (
              <ul>
                {this.state.articles.map((item, i) => {
                  return (
                    <li key={i}>
                      <div className="box">
                        <h1>
                          <a href={item.web_url} target="_blank">
                            <strong>{item.headline.main}</strong>
                          </a>
                        </h1>
                        <p>{item.snippet}</p>
                        <button
                          className="button is-primary save-button"
                          style={{ marginTop: 8 }}
                          onClick={() =>
                            this.handleSave(item.headline.main, item.web_url)}
                        >
                          Save
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
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
