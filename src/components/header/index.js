import React, { Component } from 'react';
import Logo from '../../assets/logo3.jpg';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark cabecalho">
                <a className="navbar-brand logo" href="/"><span><img src={Logo} width="100px"/></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/contato">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/planos">Planos & Preços</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">Quem somos</a>
                        </li>

                        <li className="nav-item naveg">
                            <a className="btn btn-primary entrar" href="/login">Entrar <span className="sr-only">(Página atual)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-success criar" href="/auth">inscrever-se gratuitamente</a>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;