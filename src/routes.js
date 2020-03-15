import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main-e-destaque';
import Contato from './pages/contato'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}