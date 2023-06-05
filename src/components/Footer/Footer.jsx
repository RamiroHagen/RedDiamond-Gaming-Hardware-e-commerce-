import React from 'react'
import { Link, NavLink, useParams } from "react-router-dom";
import './Footer.css'
import background from "../../assets/logo-blackTheme.webp";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='box-footer'>
      <div style={{ backgroundImage: `url(${background})`, width: `150px`, height: `65px`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, marginTop: '50px'}}/>
      </div>
      <div className='box-footer'>
        <h4 style={{marginBottom:'35px'}}>Información</h4>
        <Link to='/'>
          Inicio
        </Link>

        <Link to='/products'>
          Productos
        </Link>
        
        <Link to='/contact'>
          Contacto
        </Link>
      </div>
      <div className='box-footer'>
        <h4 style={{marginBottom:'35px'}}>Categorias</h4>
        <NavLink to='/categorias/sillasGamer'>
          Sillas Gamers
        </NavLink>
        <NavLink to='/categorias/perifericos'>
          Perifericos
        </NavLink>
        <NavLink to='/categorias/'>
          Mouses
        </NavLink>
      </div>
      <div className='box-footer'>
        <h4 style={{marginBottom:'35px'}}>Seguínos!</h4>
        <img className='icon-footer' src="../../../public/img/icons/google.svg" alt="credit-card-icon" />
        <img className='icon-footer' src="../../../public/img/icons/facebook.svg" alt="credit-card-icon" />
        <img className='icon-footer' src="../../../public/img/icons/instagram.svg" alt="credit-card-icon" />
      </div>
    </div>
  )
}

export { Footer }