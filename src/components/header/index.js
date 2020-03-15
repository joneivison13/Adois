import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark ">
                <a className="navbar-brand logo" href="/"><span>Adois!</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon">.</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/contato">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Planos</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Outros Serviços
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Criação de sites</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Criação de banners</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Edição de imagens</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Criação de aplicativos mobiles</a>
                            </div>

                        </li>
                            <li className="nav-item naveg">
                                <a className="btn btn-primary entrar" href="#">Entrar <span className="sr-only">(Página atual)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-success criar" href="#">inscrever-se gratuitamente <span className="sr-only">(Página atual)</span></a>
                            </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;