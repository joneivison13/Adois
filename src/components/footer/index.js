import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="resumo-footer">
                    <p className="title-footer">
                        Venha criar sua Loja Virtual com a Adois, levando sua empresa ao mundo!!
                </p>
                    <p className="body-footer">
                        Uma empresa que iniciou com a criação de loja virtual na Bahia, e que hoje atende lojistas de todo o Brasil. Nossa missão é oferecer para pequenas e médias empresas ferramentas completas com preços acessíveis, que permitam ao lojista atingir seu maior objetivo: Vender pela internet! Nossa sede fica em Ubaitaba-Ba mas realizamos atendimento para todo o Brasil !
                </p>
                <div className="contato-footer">
                    <p className="title-footer">contato</p>
                    <p className="contatos-title">Joneivison(programador fullstack)
                        <p className="contatos-body">Telefone: <a style={{color:"#b9b9b9"}} href="tel:+5573999553301">(73)99955-3301</a></p>
                        <p className="contatos-body">Email: <a style={{color:"#b9b9b9"}} href="mailto:joneivison355@gmail.com?subject=Ola%20Joneivison%20gostaria%20de%20fazer%20um%20orçamento">joneivison355@gmail.com</a></p>
                        <p className="contatos-body">Endereço: Rua Alice Cairo Lisboa Bela Vista Ubaitaba-Bahia</p>
                    </p>
                </div>
                </div>
            </div>
        );
    }
}
