import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="#">HomeTemplate</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'my-active nav-link' : 'nav-link'} to="/">HomePage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'my-active nav-link' : 'nav-link'} to="/about">AboutPage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'my-active nav-link' : 'nav-link'} to="/list-movie">ListMoviePage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'my-active nav-link' : 'nav-link'} to="/hook">HookPage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'my-active nav-link' : 'nav-link'} to="/hoc">HocPage</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'my-active nav-link' : 'nav-link'} to="/detail">DetailMovie</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
