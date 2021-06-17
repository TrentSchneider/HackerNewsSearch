import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={["/", "/home"]}></Route>
          <Route exact path={["/history"]}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
