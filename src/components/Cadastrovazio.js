import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cadastrovazio extends Component {
  render() {
    return (
      <>
      <h1>Nenhum cliente cadastrado</h1>
      <Link to='/cadastro'>Cadastre aqui</Link>
      </>
    );
  }
}

export default Cadastrovazio;
