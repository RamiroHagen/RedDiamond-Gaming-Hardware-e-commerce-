import React from 'react'
import './Loading.css'

export const Loading = () => {
  return (
    <div className="spinner-container">
        <div className="spinner"></div>
        <img
        className="logo"
        src="../../../public/img/icons/logo.png"
        alt="First slide"
      />
    </div>
  )
}
