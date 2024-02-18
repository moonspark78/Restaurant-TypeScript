import React from 'react'
import "./Style.css"
import Logo from "../navbar/logo.png"

export const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src={Logo} alt="poto" />
        </div>
        <div className='ancres'>
            <a href="">Home</a>
            <a href="">About</a>
        </div>
        <div className='inp'>
            <input 
                type="text"
                placeholder='Choisis ton plat ...'
                className="input" 
            />
        </div>
    </div>
  )
}
