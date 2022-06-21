import *  as actions from './actions'
import * as types from '../types'

import { call, put, all, takeLatest } from 'redux-saga/effects'

const requisicao = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}


// o saga usa funcoes geradoras
function* exampleRequest() {
    try {
        yield call(requisicao)
        // yield call(requisicao, paramA, paramB, paramC)  -> se a funcao tivesse parametros passaria sepradas por ','
        yield put(actions.clicaBotaoSuccess())
    } catch (err) {
        yield put(actions.clicaBotaoFailure())
    }
}

// o 'takeLatest' pega somente a ultima interação do usuário (exemplo de um usuario clicando várias vezes no mesmo botao que faz a chamada para a API)

// o all é um array de efeitos
export default all([

    // primeiro param é a action e o segundo é a funcao que executa (worker)
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest) 

])


