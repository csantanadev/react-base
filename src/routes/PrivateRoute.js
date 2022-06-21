import { Navigate } from 'react-router-dom'

// Componente criado para controlar e proteger rotas fechadas - Foi feito um wrapper 
function PrivateRoute({ isClosed, children, redirectPath }) {

    const isLogggedIn = false;

    if (isClosed && !isLogggedIn) {

        return <Navigate to={redirectPath} replace />;
    }

    return children
}

export default PrivateRoute;