import React, { useState } from "react";
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

  function handleSearchClick(event) {
    event.preventDefault();

    setHistory(history.concat({ "search": searchText, "timestamp": new Date() }));

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
            <History history={history} />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
