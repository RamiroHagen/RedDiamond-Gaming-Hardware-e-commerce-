import React from "react";
import background from "../../assets/logo-blackTheme.webp";
import { CartWidget } from "../CartWidget/carroDeCompras";
import { Link, NavLink, useParams } from "react-router-dom";

export const NavBar = () => {
  return (

    <nav>
      <div style={{display: "flex", justifyContent: `space-between`}}>
        < Link to= '/' >
        <div style={{ backgroundImage: `url(${background})`, width: `150px`, height: `65px`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, marginLeft: `2vw` }}/>
        </ Link >
        
          <div style={{display: `flex`, alignItems: `center`, flexDirection: `row`}}>
            <ul>
              <div style={{display: `flex`}}>
                
                <Link to='/'>
                <li><button>Inicio</button></li>
                </Link>

                <Link to='/products'>
                <li><button>Productos</button></li>
                </Link>
                
                <Link to='/contact'>
                <li><button>Contacto</button></li>
                </Link>
                
              </div>
            </ul>
          </div>

          <Link to='/cart'>
            <CartWidget />
          </Link>

      </div>
    </nav>
  )
}

