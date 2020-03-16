import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Entrar extends Component {
    render() {
        return (
            <div className="Entrar-tela">
                <div className="bg-dark">
                    <Header />
                </div>

                <form className="form-login bg-light">
                    <h1>Login</h1>

                    <label className="d-block mt-5" htmlFor="name">
                        nome:
                    </label>
                    <input className="border border-dark" type="text" name="name" />
                    <label className="d-block mt-5" htmlFor="email">
                        email:
                    </label>
                    <input className="mb-5 border border-dark" type="text" name="name" />

                    <button className="btn btn-danger mb-4 botao-login" type="submit">
                        Entrar
                        </button>
                </form>

                <Footer/>
            </div>
        )
    }
}
