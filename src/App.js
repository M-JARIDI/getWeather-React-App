import React from "react";
import Home from "./pages/Home";
import Temperature from "./pages/Temperature";
import { Provider } from "react-redux";
import store from "./redux/redux-store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

export default function App() {
  function select(state) {
    return state.temperature;
  }

  let currentValue;
  function handleChange() {
    let previousValue = currentValue;
    currentValue = select(store.getState());

    if (previousValue !== currentValue) {
      console.log(
        "Some deep nested property changed from",
        previousValue,
        "to",
        currentValue
      );
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  // unsubscribe();

  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/temperature" component={Temperature} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}
