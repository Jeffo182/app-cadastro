// Link para page Login
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/cadastro">Cadastrar cliente</Link>
        </div>
      </>
    );
  }
}

export default Home;
