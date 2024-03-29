import React from 'react'
import logoImg from "@i/logo.svg";
import { router } from '../router';
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__nav">
                <a href="" className="logo"><img src={logoImg} alt="" /></a>
                <ul className="header__list">
                    {
                        router.map((route,index)=>{
                            return <li key={index}>
                                <NavLink to={route.path} className="header__link">
                                    {route.name}
                                </NavLink>
                                </li>
                        })
                    }
                    
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header