import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Login extends Component {
    render() {

        return (
            <>
                <div className="bg-dark">
                    <Header />
                </div>

                <form className="form-login">

                    <h1>Crie Sua conta</h1>

                    <label className="d-block" htmlFor="nome">Nome</label>
                    <input type="text" name="nome" placeholder="Digite seu nome" />

                    <label className="d-block" htmlFor="email">E-mail</label>
                    <input type="email" name="email" placeholder="Digite seu email" />

                    <label className="d-block" htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />

                    <label className="d-block" htmlFor="senha">Confirme sua senha</label>
                    <input type="password" id="repeat" name="senha" placeholder="Confirme sua senha" />

                    <button type="submit" className="btn btn-success d-block mx-auto my-3">Criar conta</button>
                </form>

                <Footer/>
            </>
        )
    }
}
