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
               {/*<Route exact path={'/home'} component={Home} />*/}
                {/*Lo siguiente es para cuando escriben una pagina que no existe */}
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
/* Para aprende, se puede enrutar una pagina sin crear un archivo para esta pagina
function Home() {
    return (
        <div>
            <h2 style={{ marginTop:100 }}> ESTE ES MI HOME</h2>
        </div>
    );
}*/

