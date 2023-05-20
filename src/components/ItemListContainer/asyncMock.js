
let productos = [
    { id: '1' ,categoria: 'perifericos', name: "Auricular Redragon H320W Lamia 2 RGB White", stock:50, price: '$17.999', foto: '../../../public/img/Perifericos/auricularesRDblancos.jpg', descripcion:"La silla Gamer Argentina cuenta con más acolchado y más comodidad para mantenerte jugando o trabajando durante más tiempo Tejido de malla transpirable Esta silla Gamer está tapizada con tela de malla transpirable en los lugares que más lo necesita, el centro del asiento desde la espalda hasta las piernas. Otros puntos táctiles están tapizados en piel sintética para una sensación suave con durabilidad." },
    { id: '2' ,categoria: 'perifericos', name: "Barra de sonido Netmak Hunter RGB USB 2.0 NM-HUNTER", stock:50, price: 27, foto: '../../../public/img/Perifericos/barraSonidoNetmak.jpg'  },
    { id: '3' ,categoria: 'sillasGamer', name: "Silla Aerocool ThunderX3 TC5 Bumblebee Yellow", stock:50, price: 40, foto:'../../../public/img/sillasGamers/sillaAmarilla.jpg' },
    { id: '4' ,categoria: 'sillasGamer',  name: "Silla Panacom Gamer GM-9974CH - Negro y Azul", stock:50, price: 55, foto:'../../../public/img/sillasGamers/sillaAzul.jpg' },
    { id: '5' ,categoria: 'perifericos',  name: "Auricular Marvo H8321 Stereo Gaming", stock:50, price: 11, foto:'../../../public/img/Perifericos/auricularesNegros.jpg' },
    { id: '6' ,categoria: 'perifericos',  name: "Auricular Redragon H350 Pandora 2 7.1", stock:50, price: 19, foto:'../../../public/img/Perifericos/auricularesRDrgb.jpg' },
    { id: '7' ,categoria: 'sillasGamer',  name: "Silla Gamer Asus ROG Strix Chariot RGB", stock:50, price: 2,  foto:'../../../public/img/sillasGamers/sillaProNegra.jpg'},
    { id: '8' ,categoria: 'sillasGamer',  name: "Silla Gamer AFA Selección Argentina - Producto Oficial", stock:50, price: 2,  foto:'../../../public/img/sillasGamers/sillaSeleccion.jpg'}
]
export const mFetch = (id) =>{
    return new Promise((res, rej)=>{
        // acciones 
        // condition ? resuelto() : rechazado()
        // rechazado("No te puedo devolver la plata")
        setTimeout(()=>{
            res(!id ? productos : productos.find( productos => productos.id === id))
        }, 1295)
    }) 
} 