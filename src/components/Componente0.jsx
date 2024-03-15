import React from 'react'

import pluma from "../assets/pluma.png";

const Componente0 = () => {
  return (
    <div className='w-full m-auto p-10 flex flex-col bg-blue-500 '>

          <div className=' bg-white grid grid-cols-3 p-10 '>

            <img className='w-32 h-32' src={pluma} alt="imagen" />

            <div className=''>

              <h2 className='font-bold text-lg'>Nuestra prioridad</h2>

              <p className=' text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rem esse, deleniti deserunt ut perspiciatis eius saepe voluptatum quo, perferendis ducimus. Sequi, autem commodi corporis quos eaque culpa quae veritatis.</p>

            </div>

            <button className=' text-sm font-bold w-32 m-auto p-2 bg-green-500'>ingresa</button>

          </div>

          <div className='w-3/4 flex m-auto justify-between items-center p-10 mt-5 bg-white'>
            <p>tarjeta</p>
            <p>tarjeta</p>
            <p>tarjeta</p>
            <p>tarjeta</p>
            <p>tarjeta</p>
            <p>tarjeta</p>
          </div>

      </div>
  )
}

export default Componente0