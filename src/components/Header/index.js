import React from 'react'

import { Nav } from "./styled"
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

function Header() {

    // este hook recebe uma funcao de parametro onde recebe o state mais atual e voce pode retornar o que 
    // quiser de dentro do state (apenas a informação de botaoClicado). O retoro disso será atribuído à variavel
    const botaoClicado = useSelector(state => state.example.botaoClicado)

    return (
        <Nav>
            <Link to="/" ><FaHome size={24} /></Link>
            <Link to="profile" ><FaUserAlt size={24} /></Link>
            <Link to="account" ><FaSignInAlt size={24} /></Link>
            { botaoClicado === true ?  'Clicado' : 'Não Clicado'  }
        </Nav>
    )
}

export default Header
