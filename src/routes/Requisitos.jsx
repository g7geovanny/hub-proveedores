import React from 'react'
import Navegacion from "../components/Navegacion";
import Footer from "../components/Footer";

import imagen from "../assets/factoraje.svg";

const Requisitos = () => {

  return (

    <>
    <Navegacion titulo="Requisitos H & S"/>

    
    <div className='grid grid-rows-2 p-10 space-y-10'>

      <div className='flex '>

        <div className='grid grid-cols-2 justify-center items-center '>

          <div className='flex flex-col p-10 space-y-10 justify-center items-center'>
            <h2 className='text-4xl font-bold uppercase'>Transporte terrestre</h2>
            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae ab consequuntur blanditiis perspiciatis dignissimos amet reiciendis ullam voluptas! Reprehenderit nisi corporis quo? Aperiam enim deserunt tenetur, dolore esse provident.</p>

            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae ab consequuntur blanditiis perspiciatis dignissimos amet reiciendis ullam voluptas! Reprehenderit nisi corporis quo? Aperiam enim deserunt tenetur, dolore esse provident.</p>

            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae ab consequuntur blanditiis perspiciatis dignissimos amet reiciendis ullam voluptas! Reprehenderit nisi corporis quo? Aperiam enim deserunt tenetur, dolore esse provident.</p>

            
          </div>

          <img src={imagen} alt="" />

        </div>

      </div>


      <div className='flex  '>

        <div className='grid grid-cols-2 justify-center items-center '>

          <img src={imagen} alt="" />

          <div className='flex flex-col p-10 space-y-10 justify-center items-center'>
            <h2 className='text-4xl font-bold uppercase'>Transporte terrestre</h2>
            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae ab consequuntur blanditiis perspiciatis dignissimos amet reiciendis ullam voluptas! Reprehenderit nisi corporis quo? Aperiam enim deserunt tenetur, dolore esse provident.</p>

            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae ab consequuntur blanditiis perspiciatis dignissimos amet reiciendis ullam voluptas! Reprehenderit nisi corporis quo? Aperiam enim deserunt tenetur, dolore esse provident.</p>

            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae ab consequuntur blanditiis perspiciatis dignissimos amet reiciendis ullam voluptas! Reprehenderit nisi corporis quo? Aperiam enim deserunt tenetur, dolore esse provident.</p>
          </div>

        </div>


      </div>


    </div>

    <Footer/>
    </>
  )
}

export default Requisitos