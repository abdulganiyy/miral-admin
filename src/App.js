import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
