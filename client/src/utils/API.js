import axios from "axios";

export default {
  getArticles: (topic, startYr, endYr) => {
    const KEY = "083040deb76744ca8c92a2ec79536c0d";
    const START = startYr ? startYr + "0101" : "";
    const END = endYr ? endYr + "0101" : "";
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${KEY}&q=${topic}`;
    // &begin_date=${START}&end_date=${END}
    return axios.get(url);
  },
  getSaved: () => {
    return axios.get("/api/saved");
  },
  deleteSaved: id => {
    return axios.delete(`api/saved/${id}`);
  }
};
