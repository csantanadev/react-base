import React from 'react'
import Header from './components/Header';
import Roteamento from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

// através do provider é onde eu forneço para a aplicação o estado atual
import { Provider } from 'react-redux'
import store, { persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}> 
                <BrowserRouter>
                    <Header />
                    <Roteamento />
                    <GlobalStyles />
                    <ToastContainer autoClose={3000} className={'toast-container'} />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
