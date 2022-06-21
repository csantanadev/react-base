import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
    const persistedReducers = persistReducer(
        {
            key: 'REACT-BASE',
            storage,
            whitelist: ['example'] // o mesmo nome que foi dado la no rootReducer 
        },
        reducers
    )

    return persistedReducers;
}
