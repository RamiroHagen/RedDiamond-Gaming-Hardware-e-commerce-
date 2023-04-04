import imagenCarrito from "../../assets/carrito.png";

const CartWidget = () => {
  return (
    <div style={{display: `flex`, alignItems: `center`, marginRight: `2vw`}}>
        <img className="carrito" src={imagenCarrito} alt=""/>
        <p style={{backgroundColor: `red`, marginLeft: `3px`, padding: `8px`, borderRadius: `5rem`, color: `black`}}>2</p>
    </div>
  )
}

export { CartWidget } 