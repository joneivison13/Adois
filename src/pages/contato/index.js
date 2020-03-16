import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Contato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome:'',
            email:'',
            title:'',
            assunto:'',
        };
      }
      handleSubmit = e => {
          e.preventDefault()
          alert(`o nome enviado foi ${this.state.nome}, email foi ${this.state.email}, assunto foi ${this.state.assunto}, e titulo foi ${this.state.title}`)
      }

      handleChange = e => {
          this.setState({ nome: e.target.value })
      }
      handleChange1 = e => {
          this.setState({ email: e.target.value })
      }
      handleChange2 = e => {
          this.setState({ title: e.target.value })
      }
      handleChange3 = e => {
          this.setState({ assunto: e.target.value })
      }
    render() {
        return (
            <div className="form-corpo">
                <div className="bg-dark">
                    <Header />
                </div>

                <div className="form mx-auto mt-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-card">
                            <label htmlFor="name">Seu Nome.</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Digite aqui seu nome."
                                onChange={this.handleChange}
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
                                onChange={this.handleChange1}
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
                                onChange={this.handleChange2}
                                placeholder="Digite aqui o titulo do assunto."
                            />
                        </div>

                        <div className="form-card">
                            <label
                                htmlFor="duvida">
                                Digite aqui sua dúvida.
                        </label>
                            <textarea
                                name="duvida"
                                cols="30"
                                rows="4"
                                placeholder="Digíte aqui a sua dúvida."
                                onChange={this.handleChange3}>

                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-success px-5 py-2 m-2">Enviar</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
