import React from 'react'

const Componente2 = () => {
  return (

    <div className='bg-white flex flex-col '>

        <div className='w-2/3 bg-blue-500 mx-auto my-5 p-10 space-y-5'>
            <h1 className='text-lg font-bold'>Quieres saber de finanzas</h1>

            <p className='text-white font-medium'>Pregunta de educacion financiera</p>

            <div className='flex gap-5'>
                <button className='p-5 bg-blue-800 rounded-md text-white'>Ver Video</button>
                <button  className='p-5 bg-blue-800 rounded-md text-white'>Quiero saber mas</button>
            </div>

        </div>

        <div className='w-full p-4 my-2 bg-blue-200'>
            <h2 className='font-bold text-lg'>Tu ya estas al dia?</h2>

            <p className='ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi explicabo illum sapiente!</p>

            <p className='ml-5'>investica como hacerlo</p>

        </div>
    </div>
  )
}

export default Componente2