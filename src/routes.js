import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main-e-destaque';
import Contato from './pages/contato';
import Planos from './pages/planos';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Entrar from './pages/Entrar';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/contato" component={Contato} />
                <Route path="/planos" component={Planos} />
                <Route path="/auth" component={Login} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/login" component={Entrar} />
            </Switch>
        </BrowserRouter>
    )
}