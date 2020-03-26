import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Register(){

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setwhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();
    
    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID de Acesso: ${response.data.id}`);
            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section className="form">
                    <img src={logoImg} alt="Be The Hero"/>
                    
                    <h1>Cadastros</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#e02041"/>
                            Voltar para o Logon
                    </Link>
                </section>    
                
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome Da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="Emial"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setwhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />                            
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                
            </div>
            
        </div>
    );
}