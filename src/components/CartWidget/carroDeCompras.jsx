import imagenCarrito from "../../assets/carrito.png";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div style={{display: `flex`, alignItems: `center`, marginRight: `2vw`}}>
        <img className="carrito" src={imagenCarrito} alt=""/>
        <p style={{backgroundColor: `red`, marginLeft: `3px`, padding: `8px`, borderRadius: `5rem`, color: `black`}}>{cantidadTotal()}</p>
    </div>
  )
}

export { CartWidget } 