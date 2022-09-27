//A página de Clientes cadastrados deverá listar todos os clientes. Caso não haja cliente, a mensagem “Nenhum cliente cadastrado” deve aparecer na tela, juntamente com um botão para ir à pagina de cadastro. Esse botão deve permanecer na tela mesmo caso existam clientes.
import React, { Component } from "react";
import { connect } from "react-redux";
import Cadastrovazio from "./Cadastrovazio";

class ClientesCadastrados extends Component {
  render() {
    const { name, email, age } = this.props;
    return (
      <>
      {
        name === '' || email === '' || age === '' ? <Cadastrovazio /> :
        <div>
        <h1>Clientes Cadastrados</h1>
        <div>
          <p>
            Nome:
            {name}
            </p>
          <p>
            E-mail:
            {email}
            </p>
          <p>
            Idade:
            {age}
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
