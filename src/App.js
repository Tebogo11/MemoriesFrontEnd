import React from "react";
import { Container } from "@material-ui/core";
//Components
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./components/Auth/Auth";
import { Route, BrowserRouter, Switch } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
