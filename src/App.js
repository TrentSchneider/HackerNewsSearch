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
    console.log("history updated");
    console.log(history);
  }, [history]);

  function handleSearchClick(event) {
    event.preventDefault();

    setHistory(history.concat({ search: searchText, timestamp: new Date() }));

    if (searchText !== "") {
      API.search(searchText)
        .then(res => {
          setSearchResult(res.data.hits);
        })
        .catch(err => console.log("err", err));
    }
  }

  function sortDes() {
    console.log("before d", history);
    const desc = history.sort((a, b) => a.timestamp - b.timestamp);
    console.log("after d", desc);
    setHistory(desc);
  }
  function sortAsc() {
    console.log("before a", history);
    const asc = history.sort((a, b) => b.timestamp - a.timestamp);
    console.log("after a", asc);
    setHistory(asc);
  }

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={["/", "/home"]}>
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
