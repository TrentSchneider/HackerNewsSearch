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
        <h2>Results:</h2>
        <div className="card">
          {props.searchResult.map((data, i) => {
            return (
              <div key={i}>
                <a href={data.url} target="_blank" rel="noreferrer">
                  <h4>Title {data.title}</h4>
                  <h5>Author {data.author}</h5>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchResult;
