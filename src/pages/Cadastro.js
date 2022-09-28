// nome, idade e email
import React, { Component } from "react";
import { connect } from "react-redux";
import { addCadastro } from "../redux/actions";

class Cadastro extends Component {
  state = {
    name: "",
    email: "",
    age: "",
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    const { history } = this.props;
    const { name, email, age } = this.state;
    const { dispatch } = this.props;
    dispatch(
      addCadastro({
        name,
        email,
        age,
      })
    );
    history.push("/login");
  };
  render() {
    const { email, name, age } = this.state;
    return (
      <div class="clienteform">
        <div class="cliente">
          <h1>Cadastro</h1>
          <div class="txt_field">
            <input
              value={name}
              type="text"
              name="name"
              placeholder="Digite seu nome completo"
              onChange={this.handleChange}
            />
          </div>
          <div class="txt_field">
            <input
              value={age}
              type="text"
              name="age"
              placeholder="Digite sua idade"
              onChange={this.handleChange}
            />
          </div>
          <div class="txt_field">
            <input
              value={email}
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={this.handleChange}
            />
          </div>
          <div class="pass"></div>
          <input type="submit" value="Finalizar" onClick={this.handleClick} />
          <div class="signup_link"></div>
        </div>
      </div>
    );
  }
}

export default connect()(Cadastro);
