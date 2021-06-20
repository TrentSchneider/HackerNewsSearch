import React, { useEffect } from "react";
import SearchHistory from "../../components/searchHistory";
// import HistorySort from "../../components/histSort";

function History(props) {
  return (
    <div className="mx-1">
      <h2>History</h2>
      <div>
      <h3>Sort:</h3>
      <button className="btn btn-secondary mx-1" onClick={props.sortAsc}>
        Ascending
      </button>
      <button className="btn btn-secondary mx-1" onClick={props.sortDes}>
        Descending
      </button>
    </div>
      <div className="card p-1 mt-4">
        <h2>Results:</h2>
        <SearchHistory history={props.history} />
      </div>
    </div>
  );
}

export default History;
