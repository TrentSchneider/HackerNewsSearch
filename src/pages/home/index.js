import React, { useEffect } from "react";
import SearchResult from "../../components/searchResult";

function Home(props) {
  useEffect(() => {
    props.API.recent()
      .then(res => {
        props.setSearchResult(res.data.hits);
      })
      .catch(err => console.log("err", err));
    // eslint-disable-next-line
  }, []);
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
            onChange={e => props.setSearchText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" onClick={props.handleSearchClick}>
          Search
        </button>
      </form>
      <SearchResult searchResult={props.searchResult} />
    </div>
  );
}

export default Home;
