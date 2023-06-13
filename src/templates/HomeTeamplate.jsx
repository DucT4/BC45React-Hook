import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
const HomeTeamplate = () => {
    return (
        <div>
            <Header />
            <div className='content' style={{ minHeight: 850 }}>
                <Outlet />
            </div>
            <footer className='fs-3 text-center text-white p-3 bg-dark'>
                Footer
            </footer>
        </div>
    )
}

export default HomeTeamplate