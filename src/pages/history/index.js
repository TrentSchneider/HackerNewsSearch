import React from "react";
import SearchHistory from "../../components/searchHistory";
// import Moment from "moment";

function History(props) {
  return (
    <div>
      <h2>Search History</h2>
      <SearchHistory history={props.history} />
    </div>
  );
}

export default History;
