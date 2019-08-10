import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUserName] = useState('');

    //vai ser disparada quando o usuário der um submit no form
    async function handleSubmit(e) {
        //ele vai prefenir o evento padrão que é redirecionar para outra página
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data;
        console.log(response);

        history.push(`/dev/${_id}`);
        
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="TInDev" />
                <input
                    placeholder="Digite seu usuário no GitHub"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}