import api from '../../services/api'
import React, { useState } from 'react'

export default function Login({ history }) {
    const [email, setEmail] = useState('')


    async function handleSubmit(event) {
        event.preventDefault()

        const response = await api.post('/sessions', { email })

        const { _id } = response.data;

        if (response.status !== 200) {
            alert('Não foi possivel efetuar o Login')
        } else {
            localStorage.setItem('user', _id)
            history.push('/dashboard')

        }


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="email">E-Mail
            </label>

                <input
                    type="email"
                    id="email"
                    placeholder="seu melhor email"
                    onChange={event => setEmail(event.target.value)}
                />

                <button type="submit" className="btn">Entrar</button>

            </form>
        </>
    )
}