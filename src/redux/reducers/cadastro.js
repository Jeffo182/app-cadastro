import { SALVAR_CADASTRO } from "../actions/actionsTypes";

const INITIAL_STATE = {
  clientes: [{
    name: '',
    email: '',
    age: '',
  }]
}

function cadastroReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SALVAR_CADASTRO:
      if (state.clientes[0].name === '') {
        return {
          ...state,
          clientes: [{
            name: action.payload.name,
            email: action.payload.email,
            age: action.payload.age,
            }],
        }
      }
      const arrayRedux = [{
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        }];
      const arrayTotal = state.clientes.concat(arrayRedux)
    return {
      ...state,
      clientes: arrayTotal,
    }
    default:
      return state;
  }
}

export default cadastroReducer;
