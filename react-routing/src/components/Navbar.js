import React from 'react';
import './nav.css'
import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                <li><NavLink exact to='/' activeStyle={{ fontWeight: 'bold', color: 'red' }}>INICIO</NavLink></li>
                <li><NavLink to='/experience' activeStyle={{ fontWeight: 'bold', color: 'red' }}>EXPERIENCIA</NavLink></li>
                <li><NavLink to='/education' activeStyle={{ fontWeight: 'bold', color: 'red' }}>EDUCACIÓN</NavLink></li>
                <li><NavLink to='/profile' activeStyle={{ fontWeight: 'bold', color: 'red' }}>PERFIL</NavLink></li>
                <li><NavLink to='/urlstuff/chaqueta/rojo?precio=alto&tela=pana' activeStyle={{ fontWeight: 'bold', color: 'red' }}>URL STUFF</NavLink></li>
            </ul>
        </nav>
    )
}

export default navbar;