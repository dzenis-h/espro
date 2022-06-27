import React, { Fragment } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Contact from "./components/ContactComponent";
import Menu from "./components/layout/MenuComponent";
import Effect from "./components/Work/WorkComponent";

import "./style/darkMode.css";
import "./style/App.css";

import { ThemeProvider } from "./components/darkMode/useTheme";

const App = () => {
  return (
    <Fragment>
      <ThemeProvider>
        <Router>
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/gallery" exact component={Effect} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
