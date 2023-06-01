import React from 'react'
import './ItemDetail.css'
import { RuteoContainer } from '../RuteoContainer/RuteoContainer'
import { ItemDescription } from './ItemDescription'
import { Contador } from '../ItemCount/Contador'

const ItemDetail = ({producto}) => {
  return (
    <>
    <RuteoContainer producto = {producto}/>

      <div className="detalle">
        <div className="caja1">
          <img src={producto.foto} className="imagenDetail"/>
        </div>
        <div className="caja2">
          <h2>{producto.name}</h2>
          <div className='pieTitulo'>
            <div className='box1'>
              <p>Cod<br/>
              <h5>#{producto.id}</h5>
              </p>
            </div>

            <div className='box1'>
              <p>Stock<br/>
              <h5 style={{color: 'rgb(107, 215, 97)'}}>DISPONIBLE</h5>
              </p>
            </div>
          </div>

          <div className='medios'>
            <div className='box2'>
              <div className='icon-medios'>
                <img src="../../../public/img/icons/truck.svg" alt="truck-icon" />
              </div>
              <div className='d-flex row'>
                <h4 style={{color: 'red'}}>Formas de envío</h4>
                <p>Ver todos los medios de envio</p>
              </div>
            </div>

            <div className='box2'>
            <div className='icon-medios'>
                <img src="../../../public/img/icons/credit-card.svg" alt="credit-card-icon" />
              </div>
              <div className='d-flex row'>
                <h4 style={{color: 'red'}}>Formas de pagos</h4>
                <p>Ver todos los medios de pagos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="caja3">
          <div className='boxPrecio'>
            <h2 style={{color: 'red'}}>${producto.price}<br/>
              <p className='textPrecio'>PRECIO ESPECIAL EFECTIVO, TRANSFERENCIA O DEPOSITO</p>
            </h2>
          </div>

          <p style={{textAlign: 'start', marginLeft: '28px', marginBottom: '6px'}}>CANTIDAD</p>
          < Contador producto = {producto}/>

          <button className='whatsapp-button'>
            <div className='d-flex justify-content-center'>
              <img className='icon-wp' src="../../../public/img/icons/whatsapp.svg" alt="whatsapp-icon" />
              <p className='text-medium'>Enviar mensaje</p>
            </div>
          </button>

          <p style={{textAlign: 'start', marginLeft: '28px', marginBottom: '10px', marginTop: '30px'}}>ENVIAMOS TU PEDIDO</p>
          <div>
            <div className='boxEnviamosTuPedido'>
            <h4 style={{fontWeight:'1'}}>Retiro en sucursal Andreani</h4>
                <p>$1.000</p>
            </div>
            <div className='boxEnviamosTuPedido'>
            <h4 style={{fontWeight:'1'}}>Envio a domicilio Andreani</h4>
                <p>$2.000</p>
            </div>
            <div className='boxEnviamosTuPedido'>
            <h4 style={{fontWeight:'1'}}>A domicilio (Monitores)</h4>
                <p>$2.800</p>
            </div>
            <div className='boxEnviamosTuPedido'>
            <h4 style={{fontWeight:'1'}}>A domicilio (Sillas)</h4>
                <p>$4.500</p>
            </div>
            <div className='boxEnviamosTuPedido'>
            <h4 style={{fontWeight:'1'}}>A domicilio (Gabinetes)</h4>
                <p>$2.800</p>
            </div>
          </div>

        </div>
      </div>

      < ItemDescription producto = {producto} />
    </>
  )
}

export { ItemDetail }