import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>

      <div className="boxBanner">
        <div className='d-flex row justify-content-center'>
          <img className='icon-banner' src="../../../public/img/icons/credit-card.svg" alt="credit-card-icon" />
          <h4>Medios de pagos</h4>
          <p>Pagá tus compras directo desde la web</p>
        </div>
      </div>

      <div className="boxBanner">
      <div className='d-flex row justify-content-center'>
          <img className='icon-banner' src="../../../public/img/icons/truck.svg" alt="credit-card-icon" />
          <h4>Medios de Envio</h4>
          <p>Pagá tus compras directo desde la web</p>
        </div>
      </div>

      <div className="boxBanner">
      <div className='d-flex row justify-content-center'>
          <img className='icon-banner' src="../../../public/img/icons/comment-question.svg" alt="credit-card-icon" />
          <h4>Soporte</h4>
          <p>Comunicate con nosotros</p>
        </div>
      </div>

    </div>
  )
}

export { Banner } 