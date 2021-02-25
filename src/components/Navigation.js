import React, { useState } from 'react'
import { Avatar } from 'antd'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo500.png'


const navLinks = [
    {
      title: 'Home',
      path:'/'
    },
    {
      title: 'Blog',
      path:'/blog'
    },
    {
      title: 'Contact',
      path:'/contact'
    },
    {
      title: 'Login',
      path:'/login'
    },
];

const Navigation = () => {

  const [menuActive,setMenuActive] = useState(false);
    return (
        <nav className={`site-navigation ${menuActive && 'is-active'}`} role="navigation">
            <span className="site-title">A React Blog</span>
            <div className="nav-content-container">
              <ul>
                  {
                      navLinks.map((link,index)=>{
                          return (
                          <li className= "navigation-item"  key={index}>
                              <NavLink to={link.path} activeClassName="selected">
                                  {link.title}
                              </NavLink>
                          </li>
                          )
                      })
                  }
              </ul>
            <div className="nav-avatar-container">
                <Avatar size={50} src={logo}/>
                <span className="nav-avatar-name">Negi</span>
            </div>
            </div>
            <button className={menuActive ? 'hamburger hamburger--emphatic is-active' : 'hamburger hamburger--emphatic'} type="button"
            onClick={(ev) => setMenuActive(!menuActive)}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
        </nav>
    )
}

export default Navigation
