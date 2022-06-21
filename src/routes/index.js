import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Aluno from '../pages/Aluno'
import Alunos from '../pages/Alunos'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
import PrivateRoute from './PrivateRoute'


export default function Roteamento() {

    return (
        <Routes>
            <Route path='/' exact element={
                <PrivateRoute isClosed redirectPath={'/login'}>
                    <Alunos />
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='alunos' element={<Alunos />} />
            <Route path='aluno' element={<Aluno />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}



