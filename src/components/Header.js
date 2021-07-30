import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <a href="/" className="header__logo"><HomeIcon/></a>
        <div className="header__nav">
          <nav>
            <a href="/contact">Contacto</a>
            <a href="/#proyectos">Proyectos</a>
            <a href="https://github.com/LaureanoVera" target="blank">Github</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
