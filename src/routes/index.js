import { Route } from "react-router-dom";

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
        element: HomeTemplate,
        nested: [
            { path: "", element: HomePage },
            { path: "about", element: AboutPage },
            { path: "list-movie", element: ListMoviePage },
            { path: "hook", element: HookPage },
            { path: "hoc", element: HocPage },
            { path: "detail/:id", element: DetailMovie },
        ]
    },
    {
        path: "admin",
        element: AdminTemplate,
        nested: [
            { path: "dashboard", element: DashboardPage },
            { path: "user", element: AddUserPage },
            { path: "movie", element: AddMoviePage },
        ]
    },
    { path: "auth", element: AuthPage },
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

