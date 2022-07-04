import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './_component/Navbar'


export default function HomeTemplate() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet />
        </div>
    )
}
