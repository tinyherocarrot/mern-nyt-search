import axios from "axios";

export default {
  getArticles: () => {
    axios.get("");
  },
  getSaved: () => {
    axios.get("/api/saved");
  },
  deleteSaved: id => {
    axios.delete(`api/saved/${id}`);
  }
};
