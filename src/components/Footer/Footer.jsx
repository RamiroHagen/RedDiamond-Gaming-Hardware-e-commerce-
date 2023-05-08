import React from 'react'
import './Footer.css'
import background from "../../assets/logo-blackTheme.webp";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='box-footer'>
      <div style={{ backgroundImage: `url(${background})`, width: `150px`, height: `65px`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, marginTop: '50px'}}/>
      </div>
      <div className='box-footer'>
        <h4>Información</h4>
      </div>
      <div className='box-footer'>
        <h4>Categorias</h4>
      </div>
      <div className='box-footer'>
        <h4>Seguínos!</h4>
      </div>
    </div>
  )
}

export { Footer }