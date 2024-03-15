import React from 'react'

import mujer from "../assets/mujer.jpg";

const Componente1 = () => {

  return (

    <div className=' bg-slate-400 flex justify-center gap-10 p-10'>

        <div className='w-1/5 bg-neutral-500 '>

            <div className='w-full h-96'>
                <img className='w-full h-full object-cover ' src={mujer} alt="" />
            </div>

           
            <div className='p-5'>

                <h1>adipisicing elit. Corrupti delectus mollo aut.</h1>

                <p>Lorem ipsum, dolor sit amet consectetur adipinima accusantium iure uasi itaque odit ipsum sunt!</p>

                <button className='p-2 bg-lime-500 rounded-sm'>conoce mas</button>

            </div>

        </div>

        <div className='w-1/5 bg-neutral-500 '>

            <div className='w-full h-96'>
                <img className='w-full h-full object-cover ' src={mujer} alt="" />
            </div>


            <div className='p-5'>

                <h1>adipisicing elit. Corrupti delectus mollo aut.</h1>

                <p>Lorem ipsum, dolor sit amet consectetur adipinima accusantium iure uasi itaque odit ipsum sunt!</p>

                <button>conoce mas</button>

            </div>

        </div>


    </div>


  )
}

export default Componente1