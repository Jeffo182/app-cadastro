// nome, idade e email
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCadastro } from '../redux/actions'

class Cadastro extends Component {
  state = {
    name: '',
    email: '',
    age: '',
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  handleClick = () => {
    const { history } = this.props;
    const { name, email, age } = this.state;
    const { dispatch } = this.props;
    dispatch(addCadastro({
      name,
      email,
      age,
    }))
    history.push('/login');
  }
  render() {
    const { email, name, age } = this.state;
    return (
      <>
      <h2>Cadastro</h2>
      <div>
        <label htmlFor="name"></label>
        <input
        value= {name}
        type="name"
        name="name"
        placeholder='Digite seu nome completo'
        onChange={this.handleChange}
         />
      </div>
      <div>
        <label htmlFor="age"></label>
        <input
        value= {age}
        type="text"
        name="age"
        placeholder='Digite sua idade'
        onChange={this.handleChange}
         />
      </div>
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
      <button
      type='button'
      onClick={this.handleClick}>Finalizar</button>
      </>
    );
  }
}

export default connect()(Cadastro);
