import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
import Pages from "./components/pages/Pages";
import Signin from "./components/signin/Signin";
import Casas from "./components/casas/Casas";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/pages" component={Pages} />
        <Route path="/signin" component={Signin} />  // Añade la ruta para Signin
        <Route path="/casas/:id" component={Casas}/>
        <Redirect from="/" to="/login" />
      </Switch> 
    </Router>
  );
}

export default App;
