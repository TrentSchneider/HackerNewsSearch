import React, { useState } from "react";
import SearchHistory from "../../components/searchHistory";
// import HistorySort from "../../components/histSort";

function History(props) {
  const [sort, setSort] = useState("ascending");

  return (
    <div className="mx-1">
      <h1>History</h1>
      <h2>Sort:</h2>
      <button
        className="btn btn-secondary mx-1"
        onClick={() => setSort("ascending")}
      >
        Ascending
      </button>
      <button
        className="btn btn-secondary mx-1"
        onClick={() => setSort("descending")}
      >
        Descending
      </button>

      <button className="btn btn-secondary mx-1" onClick={props.clearStorage}>
        Clear History
      </button>

      <div className="card p-1 mt-4">
        <h2>Results:</h2>
        <SearchHistory history={props.history} sort={sort} />
      </div>
    </div>
  );
}

export default History;
