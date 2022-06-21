import * as types from '../types'

const initialState = {
    botaoClicado: false
}

// esse cara é o ouvint de ações. é ele que interpreta a ação e SEMPRE RETORNE O PROPRIO STATE OU UM NOVO STATE
export default function (state = initialState, action) {

    switch (action.type) {

        case types.BOTAO_CLICADO_SUCCESS: {
            
            console.log('Sucesso');
            // nunca manipule o estado diretamente. sempre faça uma cópia do estado, manipule e retorne o estado modificado.
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
            
        }

        case types.BOTAO_CLICADO_REQUEST: {
            console.log('Estou fazendo a requisição');
            return state;
        }


        case types.BOTAO_CLICADO_FAILURE: {
            console.log('Deu erro');
            return state;
        }


        default: {
            return state;
        }
    }
}