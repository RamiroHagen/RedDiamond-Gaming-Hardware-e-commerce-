import React from "react";
import background from "../../assets/logo-blackTheme.webp";
import { CartWidget } from "../CartWidget/carroDeCompras";
const NavBar = () => {
  return (
    <nav>
      <div style={{display: "flex", justifyContent: `space-between`}}>
        <div style={{ backgroundImage: `url(${background})`, width: `150px`, height: `65px`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, marginLeft: `2vw` }}/>
          <div style={{display: `flex`, alignItems: `center`, flexDirection: `row`}}>
            <ul>
              <div style={{display: `flex`}}>
                <li><button>Marcas</button></li>
                <li><button>Categorias</button></li>
                <li><button>Ofertas</button></li>
                <li><button>Contacto</button></li>
              </div>
            </ul>
          </div>
          <CartWidget />
      </div>
    </nav>
  )
}

export {NavBar} 
