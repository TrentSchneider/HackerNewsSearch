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
    <div className="mx-1">
      <form>
        <label htmlFor="searchInput">
          <h1>Story Search</h1>
        </label>
        <div className="input-group">
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={props.handleSearchClick}
          >
            Search
          </button>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            aria-describedby="SearchInputHelp"
            placeholder="Enter Text"
            onChange={e => props.setSearchText(e.target.value)}
          />
        </div>
      </form>
      <div className="card p-1 mt-4">
        <h2>Results:</h2>
        <SearchResult searchResult={props.searchResult} />
      </div>
    </div>
  );
}

export default Home;
