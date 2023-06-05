import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //(una llamada a una API)
    console.log('Formulario enviado:', { name, email, message });
    // Restablecer los campos del formulario
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <div className='Secciones'>
        <h2 style={{color: 'red'}}>CONTACTO</h2>
      </div>
    <div className='contactForm'>
      <form onSubmit={handleSubmit} className='d-flex row justify-content-center'>
        <label>
          <div style={{marginTop:'5%'}}>Nombre:</div>
          <input className='inputContacto'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
        <div>Email:</div>
          <input className='inputContacto'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <div>Mensaje:</div>
          <textarea className='inputContacto'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button className='btnContacto' type="submit">Enviar</button>
      </form>
      </div>
    </>
  );
};

export { Contact } 