import React from "react";
import SearchHistory from "../../components/searchHistory";
// import Moment from "moment";

function History(props) {
  return (
    <div className="mx-1">
      <h2>History</h2>
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
