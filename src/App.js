import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import throttle from "lodash/throttle";

import { configureStore } from "./stores";
import { saveState } from "./utils/localStorage";

import Navbar from "./components/navbar";
// import Header from "./components/header";
import Home from "./containers/home";
import About from "./containers/about";
import Documentation from "./containers/documentation";
import logo from "./logo.svg";
import "./App.css";

const store = configureStore();

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/documentation" component={Documentation} />
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>
);

export default App;
