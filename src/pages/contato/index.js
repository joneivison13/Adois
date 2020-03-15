import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Contato extends Component {
    render() {
        return (
            <div className="form-corpo">
                <div className="bg-dark">
                    <Header />
                </div>

                <div className="form mx-auto mt-5">
                    <form>
                        <div className="form-card">
                            <label htmlFor="name">Seu Nome.</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Digite aqui seu nome."
                                required
                            />
                        </div>

                        <div className="form-card">
                            <label
                                htmlFor="email">
                                E-Mail de contato.
                            </label>
                            <input 
                            type="email" 
                            name="email" 
                            placeholder="Digite aqui seu email"
                            />
                        </div>

                        <div className="form-card">
                            <label
                                htmlFor="titulo">
                                Titulo do assunto.
                            </label>
                            <input
                                type="text"
                                name="titulo"
                                placeholder="Digite aqui o titulo do assunto."
                            />
                        </div>

                        <div className="form-card">
                            <label
                                htmlFor="duvida">
                                Digite aqui sua dúvida.
                        </label>
                            <textarea name="duvida" cols="30" rows="4" placeholder="Digíte aqui a sua dúvida."></textarea>
                        </div>
                        <button type="submit" className="btn btn-success px-5 py-2 m-2">Enviar</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}
