import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import History from "./pages/history";
// import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [history, setHistory] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history")));
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
    console.log("set local", history);
  }, [history]);

  function clearStorage() {
    localStorage.clear();
    setHistory([]);
  }

  function handleSearchClick(event) {
    event.preventDefault();

    if (history === null) {
      setHistory([{ search: searchText, timestamp: new Date() }]);
    } else {
      setHistory(history.concat({ search: searchText, timestamp: new Date() }));
    }
    if (searchText !== "") {
      API.search(searchText)
        .then(res => {
          setSearchResult(res.data.hits);
        })
        .catch(err => console.log("err", err));
    }
  }
  function sortDes() {
    const desc = history.sort((a, b) => a.timestamp - b.timestamp);
    console.log("desc", desc);
    return desc;
  }
  function sortAsc() {
    const asc = history.sort((a, b) => b.timestamp - a.timestamp);
    console.log("asc", asc);
    return asc;
  }
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path={["/"]}>
            <Home
              API={API}
              handleSearchClick={handleSearchClick}
              setSearchText={setSearchText}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
            />
          </Route>
          <Route exact path={["/history"]}>
            <History
              history={history}
              clearStorage={clearStorage}
              setHistory={setHistory}
              sortDes={sortDes}
              sortAsc={sortAsc}
            />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
