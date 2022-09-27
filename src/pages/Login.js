// input email e senha e botao entrar
import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  handleClick = () => {
    const { history } = this.props;
    history.push('/clientes');
  }
  render() {
    const { email, password } = this.state;
    return (
      <>
      <h2>Login</h2>
      <div>
        <label htmlFor="email"></label>
        <input
        value= {email}
        type="email"
        name="email"
        placeholder='Digite seu e-mail'
        onChange={this.handleChange}
         />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
        value= {password}
        type="password"
        name="password"
        placeholder='Digite sua senha'
        onChange={this.handleChange}
         />
      </div>
      <button
      type='button'
      onClick={this.handleClick}>Entrar</button>
      </>
    );
  }
}

export default Login;
