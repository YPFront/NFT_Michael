import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Activity from "./pages/Activity";
import Page1A from './pages/page1a';
import Page1B from './pages/page1b';
import Gallery from './pages/Gallery';
import SelectTest from "./pages/SelectTest";
import Transaction from "./pages/Transaction";
import Terms from "./pages/Terms";
import Errors from "./pages/Errors";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/page1">
            <Page1A></Page1A>
          </Route>
          <Route path="/page2">
            <Page1B></Page1B>
          </Route>
          <Route path="/activity">
            <Activity></Activity>
          </Route>
          <Route path="/selectTest">
            <SelectTest></SelectTest>
          </Route>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route path="/transaction">
            <Transaction></Transaction>
          </Route>
          <Route path="/terms">
            <Terms></Terms>
          </Route>
          <Route path="/errors">
            <Errors></Errors>
          </Route>
          <Route path="">
            <Page1A></Page1A>
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
