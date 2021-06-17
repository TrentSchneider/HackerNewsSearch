import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return <div>
    <Router>
      <Switch>
        <Route exact path={["/","/home"]}></Route>
        <Route exact path={["/history"]}></Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
