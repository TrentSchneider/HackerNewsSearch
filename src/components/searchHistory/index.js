import React from "react";
import moment from "moment"

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
            <div key={i}>
              <h4>
                Date: {moment(data.timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a")} Search: {data.search}
              </h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchHistory;
