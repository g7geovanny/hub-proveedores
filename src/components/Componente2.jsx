import React from 'react'
import qr from "../assets/qr.png";

const Componente2 = () => {
  return (

    <div className='bg-white flex flex-col '>

        <div className=' w-2/3 bg-blue-500 mx-auto my-5 p-10 space-y-5'>
            <h1 className='text-2xl font-bold'>Lorem ipsum dolor,niam natus?</h1>

            <p className='text-white text-lg'>rem ipsum dolor,niam natu</p>

            <div className='flex gap-5'>
                <button className='p-5 bg-blue-800 rounded-md text-white'>Ver Video</button>
                <button  className='p-5 bg-blue-800 rounded-md text-white'>Quiero saber mas</button>
            </div>

        </div>

        <div className='w-full pl-36 py-12 my-2 bg-blue-200 flex justify-center gap-96 '>
          <div>
            <h2 className='font-bold text-2xl'>¿Lorem iere  Aliquam, beatae?</h2>

            <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt!</p>

            <p className='text-lg'>investiga como hacerlo</p>

          </div>
            

            <div>
              <img src={qr} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Componente2