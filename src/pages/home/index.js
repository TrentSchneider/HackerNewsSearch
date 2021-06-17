import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import SearchResult from "../../components/searchResult";
function Home(props) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    API.recent()
      .then(res => {
        props.setSearchResult(res.data);
      })
      .catch(err => console.log("err", err));
  });

  function handleSearchClick(event) {
    event.preventDefault();
    if (searchText !== "") {
      API.search(searchText)
        .then(res => {
          props.setSearchResult(res.data);
        })
        .catch(err => console.log("err", err));
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="searchInput">
            <h3>Story Search</h3>
          </label>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            aria-describedby="SearchInputHelp"
            placeholder="Enter Text"
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" onClick={handleSearchClick}>
          Search
        </button>
      </form>
      <SearchResult searchResult={props.searchResult} />
    </div>
  );
}

export default Home;
