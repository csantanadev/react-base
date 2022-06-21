import { all } from 'redux-saga/effects'

import example from './example/sagas'

// serve para exportar todos os sagas (tb usando funcao geradora)
export default function* rootSaga() {
    return yield all([example]) // modulo de exemplo mas poderia ser o modulo de carrinho ou checkout e etc...
}