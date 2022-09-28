//A página de Clientes cadastrados deverá listar todos os clientes. Caso não haja cliente, a mensagem “Nenhum cliente cadastrado” deve aparecer na tela, juntamente com um botão para ir à pagina de cadastro. Esse botão deve permanecer na tela mesmo caso existam clientes.
import React, { Component } from "react";
import { connect } from "react-redux";
import Cadastrovazio from "./Cadastrovazio";

class ClientesCadastrados extends Component {
  render() {
    const { clientes } = this.props;
    return (
      <div class="clienteform">
        {clientes[0].name === "" ||
        clientes[0].email === "" ||
        clientes[0].age === "" ? (
          <Cadastrovazio />
        ) : (
          clientes.map((element) => (
            <div class="cliente">
              <h3>Cliente</h3>
              <div>
                <p>
                  Nome:
                  {element.name}
                </p>
                <p>
                  E-mail:
                  {element.email}
                </p>
                <p>
                  Idade:
                  {element.age}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ cadastro }) => ({
  ...cadastro,
});

export default connect(mapStateToProps)(ClientesCadastrados);
