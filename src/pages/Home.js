// Link para page Login
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div class="alinharHome">
      <div class="clienteform">
        <Link class="txt_homelink" to="/login">
          Login
        </Link>
        <Link class="txt_homelink" to="/cadastro">
          Cadastrar cliente
        </Link>
      </div>
      </div>
    );
  }
}

export default Home;
