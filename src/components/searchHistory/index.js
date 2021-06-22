import React from "react";
import moment from "moment";

function SearchHistory(props) {
  if (
    props.history === undefined ||
    props.history === null ||
    props.history.length === 0
  ) {
    return (
      <div>
        <h3>No History</h3>
      </div>
    );
  } else {
    return (
      <div>
        {props.history.map((data, i) => {
          return (
            <div key={i} className="card my-1 p-2">
              <h3 className="card-title">Search: {data.search}</h3>
              <p className="card-subtitle">
                Date: {moment(data.timestamp).format("M-D-YYYY h:mm:ssa")}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchHistory;
