import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import PrivateRoute from "../Auth/PrivateRoute";
import Empleados from "../empleados";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={ [ "/", "/login" ] } component={ Login } />
                <PrivateRoute exact path={ [ "/empleados" ] } component={ Empleados } />

                {/* Ruta de página no encontrada (404) */}
                <Route path={ "*" } component={ () => (
                    <h1 style={{ marginTop: 300 }}>
                    404
                    <br/>
                    Página no encontrada
                    </h1>
                ) } />
            </Switch>
        </Router>
    )
}

