import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            conSenha: '',
        }
    }

    handleChange = e => {
        this.setState({
            nome: e.target.value,
        })
    }
    handleChange1 = e => {
        this.setState({
            email: e.target.value,
        })
    }
    handleChange2 = e => {
        this.setState({
            senha: e.target.value,
        })
    }
    handleChange3 = e => {
        this.setState({
            confSenha: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.senha != this.state.confSenha){
            alert('senhas diferentes')
        }else{
            alert('cadstro comcluido com sucesso!!!')
        }
    }

    render() {
        const {senha} = this.state.senha
        const {confSenha} = this.state.conSenha

        return (
            <>
                <div className="bg-dark">
                    <Header />
                </div>

                <form className="form-login" onSubmit={this.handleSubmit}>

                    <h1>Crie Sua conta</h1>

                    <label className="d-block" htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        onChange={this.handleChange}
                    />

                    <label className="d-block" htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={this.handleChange1}
                    />

                    <label className="d-block" htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        onChange={this.handleChange2}
                    />

                    <label className="d-block" htmlFor="senha">Confirme sua senha</label>
                    <input
                        type="password"
                        id="repeat"
                        name="senha"
                        placeholder="Confirme sua senha"
                        onChange={this.handleChange3}
                    />

                    <button type="submit" className="btn btn-success d-block mx-auto my-3 botao-login">Criar conta</button>
                </form>

                <Footer />
            </>
        )
    }
}
