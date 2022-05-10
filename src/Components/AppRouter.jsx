import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPages from "../pages/PostIdPages";
import {publicRoutes, privateRoutes} from "../Router/route";
import {authContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(authContext)
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*"
                       element={<Navigate to="/posts" replace/>}
                />
            </Routes>
        :
            <Routes>
            {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*"
                       element={<Navigate to="/login" replace/>}
                />
            </Routes>
    );
};

export default AppRouter;