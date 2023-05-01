import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Carrousel = () => {
  return (
    <>
    <Carousel style={{height:'80vh'}}>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100" style={{ height:'78vh', objectFit:'cover' }}
          src="../../../public/img/carousel/AuricularesGaming1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100" style={{ height:'78vh', objectFit:'cover' }}
          src="../../../public/img/carousel/sillasGaming1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100" style={{ height:'78vh', objectFit:'cover' }}
          src="../../../public/img/carousel/MouseGaming1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export { Carrousel } 