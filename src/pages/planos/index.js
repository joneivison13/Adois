import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Planos extends Component {
    render() {
        return (
            <>
                <div className="bg-dark">
                    <Header />
                </div>

                <div className="planos-body">
                    <div className="planos-card">
                        <p className="planos-title">
                            Plano Start
                        </p>
                        <p className="planos-price">
                            R$39,80
                        </p>
                        <a href="/assine" className="btn btn-success d-block mt-5 mb-3 mx-auto botao">Assine</a>
                        <p className="planos-components">Até 200 produtos</p>
                        <p className="planos-components">10 mil acessos</p>
                        <p className="planos-components">2 Contas de e-mail</p>
                        <p className="planos-components">sem brindes</p>
                    </div>

                    

                </div>

                <Footer />
            </>
        )
    }
}
