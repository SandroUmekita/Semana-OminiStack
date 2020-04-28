import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './pages/Profile';
import Logon from './pages/Logon';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/Profile" exact component={Profile} />
                <Route path="/Incidents/new" exact component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}