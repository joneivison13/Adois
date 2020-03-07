import React, { Component } from 'react';
import Users from '../../assets/users.jpg';
import Cell from '../../assets/mobile-alt-solid.svg';
import Cadeado from '../../assets/lock-solid.svg';
import Desktop from '../../assets/desktop.svg';
import Global from '../../assets/globe.svg';
import Money from '../../assets/money.svg';
import Square from '../../assets/check-square.svg';

export default class Destaques extends Component {
    render() {
        return (
            <>
                <div className="monte">
                    <img src={Users} alt="Monte sua loja Hoje mesmo!!!" width="250px " className="imagen-users" />
                    <p className="texto-monte">Nosso produto é ideal para <span className="verde">criação de loja virtual</span> de venda de eletrônicos, loja virtual de roupas feminas, serviços, petshop, floricultura, livraria, beleza e saúde, perfumaria, sexshop, artesanato, calçados, esportes, informática, decoração e outros mais de <span className="bold">60 segmentos</span>.. Qual o seu ramo? Nós podemos lhe ajudar !
                    </p>
                </div>
                <div className="Destaques" style={{ fontSize: "100" }}>
                    <p className="destaquer-p" style={{textAlign:"center"}}><strong>Destaques</strong> de nossa plataforma de loja virtual</p>
                    <div className="destaques-card">
                    <img src={Cell} alt="" className="icon-destaques mt-3" width="20px" />
                    <p className="text-icon">
                        <h5 className="titulo-icon mt-3">VERSÃO DESKTOP & MOBILE</h5>
                        Nossa plataforma trabalha com <span className="bold">layouts responsivos</span> e se adapta corretamente, tanto em computadores pessoais como celulares e tablets, seguindo as recomendações do Google.
                    </p>
                    </div>
                    <div className="destaques-card">
                    <img src={Cadeado} alt="" className="icon-destaques mt-3" width="20px" />
                    <p className="text-icon">
                        <h5 className="titulo-icon mt-3">SEGUANÇA & RAPIDEZ</h5>
                        Nossa plataforma trabalha com <span className="bold">rapidez</span> para a melhor produção de sua Loja Virtual, site, ou aplicações mobiles.
                        Nossa plataforma também proucura o melhor local custo benefício e de <span className="bold">alta segurança</span> para ser feito a sua hospedagem.
                 </p>
                    </div>
                    <div className="destaques-card">
                    <img src={Desktop} alt="" className="icon-destaques mt-3" width="20px" />
                    <p className="text-icon">
                        <h5 className="titulo-icon mt-3">LAYOUT POR PÁGINAS</h5>
                        Insira <span className="bold">banners, fotos e imagens diferenciadas</span> ou crie visuais distintos com um preço ótimo para suas capa, páginas de departamento, checkout, página de exibição de produtos, entre outras.
                    </p>
                    </div>
                </div>
                <div className="vantagens">
                    <p className="vantagens-title">Vantagens em <strong>ter uma loja virtual</strong></p>
                    <div className="vantagens-card">
                        <img className="vantagen-icon" src={Users} alt="" width="30px"/>
                        <p className="vantagens-text">
                            <h5 className="titulo">EXPANDIR SEU NEGÓCIO</h5>
                            Ao criar uma loja virtual, você divulga seus produtos na internet e atinge não apenas os clientes de um bairro ou cidade, mas sim de um Estado ou País. Supere as barreiras do seu mercado criando uma loja virtual
                        </p>
                    </div>
                    <div className="vantagens-card">
                        <img className="vantagen-icon" src={Global} alt="" width="30px"/>
                        <p className="vantagens-text">
                            <h5 className="titulo">DISPONIBILIDADE</h5>
                            Na loja virtual os produtos estarão disponíveis 24h. Assim, a qualquer hora do dia ou da noite, os consumidores poderão entrar no site e escolher os produtos que desejam. Além disso, atualmente as pessoas buscam conforto e comodidade ao fazer compras e isso será oferecido, também, aos clientes.
                        </p>
                    </div>
                    <div className="vantagens-card">
                        <img className="vantagen-icon" src={Square} alt="" width="30px"/>
                        <p className="vantagens-text">
                            <h5 className="titulo">BAIXO INVESTIMENTO</h5>
                            Nesse tipo de negócio há baixo custo em infraestrutura, já que dependendo dos produtos, não existe um alto custo de gerenciamento do site. A manutenção da loja virtual também requer baixo investimento. O valor que se gasta no aluguel de uma implantação de uma loja física é muito maior se comparado a um plano de uma loja virtual.
                        </p>
                    </div>
                    <div className="vantagens-card">
                        <img className="vantagen-icon" src={Money} alt="" width="30px"/>
                        <p className="vantagens-text">
                            <h5 className="titulo">DIMINUIR OS SEUS CUSTOS</h5>
                            Uma loja física requer uma pesquisa densa de ponto e localização, afinal, o empresário vai querer que o seu negócio seja bem visualizado e chame a atenção de clientes em potencial. Diante disso, é necessário um alto valor. Ao criar uma loja virtual esses obstáculos não existem, já que é necessário apenas comprar um domínio, escolher uma boa plataforma de loja virtual, criar um layout agradável e funcional ao consumidor. Um investimento inicial bem mais baixo.
                        </p>
                    </div>
                    
                </div>
            </>
        );
    }
}
