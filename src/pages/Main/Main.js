import React, { Component } from 'react';
import Fundo from '../../assets/fundo.jpg'

export default class Main extends Component {
  render() {
    return (
      <div className="secao">
        <div className="text white">
          <h1>Crie sua loja online</h1>
            <h4 className="item-corpo">Sem Limite de vendas </h4>
            <h4 className="item-corpo">Sem comissões por venda</h4>
            <h4 className="item-corpo">Banner, logo e imagem incluso</h4>

            <a href="" className="btn btn-success bataum"> Assine já</a>

        </div>
      </div>
    );
  }
}
