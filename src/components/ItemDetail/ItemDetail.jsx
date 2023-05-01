import React from 'react'
import './ItemDetail.css'
import ItemContador from '../../components/ItemCount/ItemContador'
import { RuteoContainer } from '../RuteoContainer/RuteoContainer'
import { ItemDescription } from './ItemDescription'

const ItemDetail = ({producto}) => {
  return (
    <>

    <RuteoContainer/>

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
            <h2 style={{color: 'red'}}>{producto.price}<br/>
              <p className='textPrecio'>PRECIO ESPECIAL EFECTIVO, TRANSFERENCIA O DEPOSITO</p>
            </h2>
          </div>

          <p style={{textAlign: 'start', marginLeft: '28px', marginBottom: '6px'}}>CANTIDAD</p>
          < ItemContador />

          <button className='whatsapp-button'>
            <div className='d-flex justify-content-center'>
              <img className='icon-wp' src="../../../public/img/icons/whatsapp.svg" alt="whatsapp-icon" />
              <p className='text-medium'>Enviar mensaje</p>
            </div>
          </button>

          <p style={{textAlign: 'start', marginLeft: '28px', marginBottom: '10px', marginTop: '30px'}}>ENVIAMOS TU PEDIDO</p>
          <div>
            <div className='boxEnviamosTuPedido'>Hola </div>
            <div className='boxEnviamosTuPedido'>hola </div>
            <div className='boxEnviamosTuPedido'>hola </div>
            <div className='boxEnviamosTuPedido'>hola</div>
            <div className='boxEnviamosTuPedido'>hola </div>
          </div>

        </div>
      </div>

      < ItemDescription producto = {producto} />
    </>
  )
}

export { ItemDetail }