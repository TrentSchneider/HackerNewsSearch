import React from "react";

function SearchHistory(props) {
  console.log("history", props.history);
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
              <h4>{data}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchHistory;
