import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Congratulations from "./screens/congratulations/congratulations.view";
// import { AssemblePlan } from "./screens";
import Login from "./screens/login/login.view";
import RimacQuote from "./screens/rimacQuote/rimacQuote.view";

class Routes extends React.Component {

    render = () => (
    <Router>
        <Switch>
            <Route path='/' exact>
                <Login />
            </Route>
            <Route path='/cotizacion' exact>
                <RimacQuote />
            </Route>
            <Route path='/felicitaciones' exact>
                <Congratulations />
            </Route>
        </Switch>

    </Router>
    )
}

export default Routes