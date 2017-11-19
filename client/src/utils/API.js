import axios from "axios";

export default {
  getArticles: (topic, startYr, endYr) => {
    const KEY = "api-key=083040deb76744ca8c92a2ec79536c0d";
    const query = `&q=${topic}`;
    const START = startYr ? `&begin_date=${startYr}0101` : "";
    const END = endYr ? `&end_date=${endYr}0101` : "";
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${KEY}${query}${START}${END}`;
    return axios.get(url);
  },
  getSaved: () => {
    return axios.get("/api/saved");
  },
  deleteSaved: id => {
    return axios.delete(`api/saved/${id}`);
  }
};
