import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {authContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(authContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyButton onClick = {logout}>
                Выйти
            </MyButton>
            <div className="navbar__links">
                <a href="https://github.com/s0dach">Гит </a>
                <Link to="/about">Страница </Link>
                <Link to="/posts">Посты </Link>
            </div>
        </div>
    );
};

export default Navbar;