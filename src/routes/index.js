import { Route } from "react-router-dom";
import { lazy } from "react";

import HomeTemplate from "../container/HomeTemplate";
import HomePage from "../container/HomeTemplate/HomePage";
import AboutPage from "../container/HomeTemplate/AboutPage";
import ListMoviePage from "../container/HomeTemplate/ListMoviePage";
import HookPage from "../container/HomeTemplate/Hooks";
import HocPage from "../container/HomeTemplate/HocPage";
import DetailMovie from "../container/HomeTemplate/DetailMovie";


import AdminTemplate from "../container/AdminTemplate";
import DashboardPage from "../container/AdminTemplate/DashboardPage";
import AddUserPage from "../container/AdminTemplate/AddUserPage";
import AddMoviePage from "../container/AdminTemplate/AddMoviePage";
import AuthPage from "../container/AdminTemplate/AuthPage";


const routes = [
    {
        path: "",
        element: lazy(() => import('../container/HomeTemplate')),
        nested: [
            { path: "", element:  lazy(() => import('../container/HomeTemplate/HomePage')) },
            { path: "about", element:  lazy(() => import('../container/HomeTemplate/AboutPage')) },
            { path: "list-movie", element:  lazy(() => import('../container/HomeTemplate/ListMoviePage')) },
            { path: "hook", element:  lazy(() => import('../container/HomeTemplate/Hooks')) },
            { path: "hoc", element:  lazy(() => import('../container/HomeTemplate/HocPage')) },
            { path: "detail/:id", element:  lazy(() => import('../container/HomeTemplate/DetailMovie')) },
        ]
    },
    {
        path: "admin",
        element:  lazy(() => import('../container/AdminTemplate')),
        nested: [
            { path: "dashboard", element:  lazy(() => import('../container/AdminTemplate/DashboardPage')) },
            { path: "user", element:  lazy(() => import('../container/AdminTemplate/AddUserPage')) },
            { path: "movie", element:  lazy(() => import('../container/AdminTemplate/AddMoviePage')) },
        ]
    },
    { path: "auth", element:  lazy(() => import('../container/AdminTemplate/AuthPage')) },
]

const renderRoutes = () => {
    return routes.map((route, index) => {

        if (route.nested) {

            return (
                <Route key={index} path={route.path} element={<route.element />} >
                    {route.nested.map((item, index) => (
                        <Route key={index} path={item.path} element={<item.element />} />
                    ))}
                </Route>
            )

        } else {
            return <Route key={index} path={route.path} element={<route.element />} />
        }

    })
}

export { renderRoutes }

