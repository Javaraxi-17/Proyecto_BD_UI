import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
import Pages from "./components/pages/Pages";
import Signin from "./components/signin/Signin";
import Casas from "./components/casas/Casas";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/pages" component={Pages} />
          <PrivateRoute path="/casas/:id" component={Casas} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
