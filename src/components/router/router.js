import React from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Login from "../login/login"

export default function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <Route
                path={'*'}
                component={() => (
                    <h2 style={{ marginTop: 200 }}>
                        404
                        <br />
                        PAGINA NO ENCONTRADA
                    </h2>
                )}
                />
            </Switch>
        </Router>
    )
}
