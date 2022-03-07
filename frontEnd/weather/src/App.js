import "./App.css";
import { Home } from "./component/HomePage";
import { Route, Switch } from "react-router-dom";
import { Weather } from "./component/Weather";
import axios from 'axios'
function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/weather" component={Weather} />
      </Switch>
    </div>
  );
}

export default App;
