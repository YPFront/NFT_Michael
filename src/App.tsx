import './App.css';
import Page1A from './pages/page1a';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/page1">
            <Page1A></Page1A>
          </Route>
          <Route path="/">
            <Page1A></Page1A>
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
