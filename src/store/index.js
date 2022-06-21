import { persistStore  }  from 'redux-persist';
import { createStore, applyMiddleware } from 'redux'
import  createSagaMiddleware  from 'redux-saga'

import persistedReducers from './modules/reduxPersist'  // dei o nome de 'persistedReducers' mas isso é uma funcao que recebe um reducer

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

// cria o middleware
const sagaMiddleware = createSagaMiddleware()

// aplica o middleware na store (é como se fosse na rota)
const store = createStore(
                        persistedReducers(rootReducer), 
                        applyMiddleware(sagaMiddleware)
                        )

// fala para o saga executar o middlware
sagaMiddleware.run(rootSaga)


export const  persistor = persistStore(store);
export default store;