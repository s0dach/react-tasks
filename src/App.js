import React, {createContext, useEffect, useState} from "react";
import './styles/app.css';
import About from "./pages/About";
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import {authContext} from "./context";


function App() {
        const [isAuth, setIsAuth] = useState(false)
        const [isLoading,setIsLoading] = useState(true)

        useEffect(() => {
            if(localStorage.getItem('auth')) {
                setIsAuth(true)
            }
            setIsLoading(false)
        })
         return (
             <authContext.Provider value={{
                 isAuth,
                 setIsAuth,
                 isLoading
             }}>
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                </BrowserRouter>
             </authContext.Provider>
        )
}
export default App;
