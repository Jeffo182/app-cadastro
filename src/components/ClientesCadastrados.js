//A página de Clientes cadastrados deverá listar todos os clientes. Caso não haja cliente, a mensagem “Nenhum cliente cadastrado” deve aparecer na tela, juntamente com um botão para ir à pagina de cadastro. Esse botão deve permanecer na tela mesmo caso existam clientes.
import React, { Component } from "react";
import { connect } from "react-redux";
import Cadastrovazio from "./Cadastrovazio";

class ClientesCadastrados extends Component {
  render() {
    const { clientes } = this.props;
    return (
      <>
      {
        clientes[0].name === '' || clientes[0].email === '' || clientes[0].age === '' ? <Cadastrovazio /> :
        <div>
        <h1>Clientes Cadastrados</h1>
        <div>
          <p>
            Nome:
            {clientes[0].name}
            </p>
          <p>
            E-mail:
            {clientes[0].email}
            </p>
          <p>
            Idade:
            {clientes[0].age}
          </p>
        </div>
        </div>
  }
      </>
    );
  }
}

const mapStateToProps = ({ cadastro }) => ({
  ...cadastro,
});

export default connect(mapStateToProps)(ClientesCadastrados);
