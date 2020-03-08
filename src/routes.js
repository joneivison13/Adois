import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MaDes from './pages/main-e-destaque';
import Login from './pages/Loggin'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MaDes} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}