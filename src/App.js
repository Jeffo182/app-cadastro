import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ClientesCadastrados from "./components/ClientesCadastrados";
import Cadastro from "./pages/Cadastro";
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/notfound" component={NotFound} />
          <Route path="/clientes" component={ClientesCadastrados} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
