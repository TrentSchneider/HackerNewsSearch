import React, { useState } from "react";
import Home from "./pages/home";
import History from "./pages/history";
// import Footer from "./components/footer";
// import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [history, setHistory] = useState([]);

  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              history={history}
              setHistory={setHistory}
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
