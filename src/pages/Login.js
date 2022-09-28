// input email e senha e botao entrar
import React, { Component } from "react";
import { addLogin } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    const { history } = this.props;
    const { email, password } = this.state;
    const { dispatch } = this.props;
    dispatch(
      addLogin({
        email,
        password,
      })
    );
    history.push("/clientes");
  };
  render() {
    const { email, password } = this.state;
    return (
      <body>
        <div class="center">
          <h1>Login</h1>
          <form method="post">
            <div class="txt_field">
              <input
                value={email}
                type="text"
                name="email"
                onChange={this.handleChange}
                required
              />
              <span></span>
              <label>E-mail</label>
            </div>
            <div class="txt_field">
              <input
                value={password}
                type="password"
                name="password"
                onChange={this.handleChange}
                required
              />
              <span></span>
              <label>Senha</label>
            </div>
            <div class="pass">Esqueceu a Senha?</div>
            <input type="submit" value="Login" onClick={this.handleClick}/>
            <div class="signup_link">Cadastre-se: <Link to="/cadastro">Sing up</Link>
        </div>
          </form>
        </div>
      </body>
    );
  }
}

export default connect()(Login);
