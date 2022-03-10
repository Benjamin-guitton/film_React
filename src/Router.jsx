import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/login'
import Movie from "./Movie/ListMovie";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/movies' element={<Movie/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;