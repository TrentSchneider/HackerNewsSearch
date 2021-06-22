import React, { useEffect } from "react";
import SearchHistory from "../../components/searchHistory";
// import HistorySort from "../../components/histSort";

function History(props) {
  console.log("history", props.history);
  return (
    <div className="mx-1">
      <h1>History</h1>
      <h2>Sort:</h2>
        <button
          className="btn btn-secondary mx-1"
          onClick={() => {
            props.setHistory(props.sortAsc);
          }}
        >
          Ascending
        </button>
        <button
          className="btn btn-secondary mx-1"
          onClick={() => {
            props.setHistory(props.sortDes);
          }}
        >
          Descending
        </button>
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.clearStorage}
        >
          Clear History
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
