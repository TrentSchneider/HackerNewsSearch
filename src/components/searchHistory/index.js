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
  } else if (props.sort === "ascending") {
    const asce = props.history.sort((a, b) => a.timestamp - b.timestamp);
    return (
      <div>
        {asce.map((data, i) => {
          return (
            <div key={i} className="card my-1 p-2">
              <h3 className="card-title">Search: {data.search}</h3>
              <p className="card-subtitle">
                Date: {moment.unix(data.timestamp).format("M-D-YYYY h:mm:ssa")}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else if (props.sort === "descending") {
    const desc = props.history.sort((a, b) => b.timestamp - a.timestamp);
    return (
      <div>
        {desc.map((data, i) => {
          return (
            <div key={i} className="card my-1 p-2">
              <h3 className="card-title">Search: {data.search}</h3>
              <p className="card-subtitle">
                Date: {moment.unix(data.timestamp).format("M-D-YYYY h:mm:ssa")}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchHistory;
