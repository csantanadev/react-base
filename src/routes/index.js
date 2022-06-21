import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Account from '../pages/Account'

import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Home from '../pages/Home'
import PrivateRoute from './PrivateRoute'

export default function Roteamento() {

    return (
        <Routes>
            <Route path='/' exact element={
                <PrivateRoute isClosed redirectPath={'/login'}>
                    <Home />
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='profile' element={<Profile />} />
            <Route path='account' element={<Account />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
    )
}



