import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../login/login"
import PrivateRoute from '../auth/privateroute';
import EmpleadosBuscar from '../empleados/empleados.buscar';

export default function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={ Login } />
                <Route exact path={["/", "/index"]} component={ index } />
                <PrivateRoute exact path="/empleados" component={ EmpleadosBuscar } />
                <Route path={'*'} component={() => (
                    <h2 style={{ marginTop: 200 }}>
                        404
                        <br />
                        PAGINA NO ENCONTRADA
                    </h2>
                )} />
            </Switch>
        </Router>
    );
}

function index() {
    return (
    <h2 style={{ marginTop: 200 }}>Bienvenidos a Index</h2>
    )
}
