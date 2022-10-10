import React from 'react'
import pika from '../assets/img/pikachu-home.png'

const Home = () => {
  return (
    <div className='m-5'>
      <h1 className='p-5'>¡Bienvenido maestro!</h1>
      <img src={pika} alt='pika'/>
    </div>
  )
}

export default Home