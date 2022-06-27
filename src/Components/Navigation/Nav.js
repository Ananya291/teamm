import React from 'react'
import './Nav.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()
    function redirectToHome(){
        navigate('/')
    }

    return (
        <div className='nav_container'>
            <div className='nav_container_inside'>
                <a className='logo_container' href='#Banner'>
                    <img onClick={redirectToHome} className='logo' src={logo} />
                </a>
                <div className='nav_menu_container'>
                    <div className='nav_menu'>
                        <a href='#About'>About us</a>
                    </div>
                    <div className='nav_menu'>
                        <a href='#Journey'>Journey</a>
                    </div>
                    <div className='nav_menu'>
                        <a href='#Career'>Career</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav