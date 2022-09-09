import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Apply from '../pages/Apply'
import Login from '../pages/Login'
import Rate from '../pages/Rate'
import Solution from '../pages/Solution'
import ComingSoon from '../pages/ComingSoon'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="solution" element={<Solution/>}/>
            <Route path="rate-plan" element={<Rate/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="apply" element={<Apply/>}/>
            <Route path="coming-soon" element={<ComingSoon/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes