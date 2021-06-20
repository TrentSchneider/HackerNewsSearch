import React from "react";
import moment from "moment";

function SearchHistory(props) {
  if (props.history === undefined) {
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
              <h4 className="card-title">Search: {data.search}</h4>
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
