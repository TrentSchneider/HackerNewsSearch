import axios from "axios";

export default {
  search: function (storySearch) {
    let queryURL =
      "http://hn.algolia.com/api/v1/search?query=" +
      storySearch +
      "&tags=story";
    return axios.get(queryURL);
  },
  recent: function () {
    const queryURL = "http://hn.algolia.com/api/v1/search_by_date?tags=story";
    return axios.get(queryURL);
  }
};
