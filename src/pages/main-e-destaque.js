import React, { Component } from 'react';
import Main from './Main/Main'
import Destaques from './Destaques'
import Footer from '../components/footer'

export default class MaDes extends Component {
    render() {
        return (
            <>
                <Main />
                <Destaques />
                <Footer />
            </>
        );
    }
}
