import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import History from "./pages/history";
// import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import "./App.css";
import moment from "moment";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [history, setHistory] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history")));
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  function clearStorage() {
    localStorage.clear();
    setHistory([]);
  }

  function handleSearchClick(event) {
    event.preventDefault();

    if (history === null) {
      setHistory([{ search: searchText, timestamp: moment().unix() }]);
    } else {
      setHistory(
        history.concat({ search: searchText, timestamp: moment().unix() })
      );
    }
    if (searchText !== "") {
      API.search(searchText)
        .then(res => {
          setSearchResult(res.data.hits);
        })
        .catch(err => console.log("err", err));
    }
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
            <History history={history} clearStorage={clearStorage} />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
