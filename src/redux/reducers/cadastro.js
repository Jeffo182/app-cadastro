import { SALVAR_CADASTRO } from "../actions/actionsTypes";

const INITIAL_STATE = {
  name: '',
  email: '',
  age: '',
}

function cadastroReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SALVAR_CADASTRO:
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      age: action.payload.age,
    }
    default:
      return state;
  }
}

export default cadastroReducer;
