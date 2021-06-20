import React from "react";
import Home from "./pages/Home";
import Temperature from "./pages/Temperature";
import { Provider } from "react-redux";
import store from "./redux/redux-store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/temperature" component={Temperature} />
          </Switch>
        </Router>
        <Footer />
      </Container>
    </Provider>
  );
}
