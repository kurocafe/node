import React from 'react'
import Logo from '../../assets/logo.jpg'
import './navbarstyle.css'



export const Navbar = () => {
  return (
    <div className='banner'>
        <div className="navbar">
            <a href="https://bluearchive.jp/"><img src={Logo} alt="none" className='logo'/></a>
            <ul>
                <li><a href="#">Gehenna</a></li>
                <li><a href="#">Millennium</a></li>
                <li><a href="#">Trinity</a></li>
                <li><a href="#">Abydos</a></li>
                <li><a href="#">Valkyrie</a></li>
                <li><a href="#">SRT</a></li>
                <li><a href="#">Arius</a></li>
                <li><a href="#">Hyakkiyako</a></li>
                <li><a href="#">Red Winter</a></li>
                <li><a href="#">Shanhaijing</a></li>
            </ul>
        </div>
    </div>
  )
}
