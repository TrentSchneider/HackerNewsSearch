import React from "react";

function SearchResult(props) {
  if (props.searchResult.length === 0) {
    return (
      <div>
        <h3>No Results</h3>
      </div>
    );
  } else {
    return (
      <div>
        {props.searchResult.map((data, i) => {
          if (data.url === null) {
            return (
              <div key={i} className="card my-1 p-2">
                <h4 className="card-title">{data.title}</h4>
                <p className="card-subtitle">Author: {data.author}</p>
              </div>
            );
          } else {
            return (
              <div key={i} className="card my-1 p-2">
                <a href={data.url} target="_blank" rel="noreferrer" className="link">
                  <h4 className="card-title">{data.title}</h4>
                </a>
                <p className="card-subtitle">Author: {data.author}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SearchResult;
