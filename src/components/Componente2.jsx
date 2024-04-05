import React from 'react'
import { Link } from "react-router-dom";
import qr from "../assets/qr.png";


const Componente2 = () => {
  return (

    <div className='bg-white flex flex-col '>

        <div className=' w-5/6 bg-blue-500 mx-auto my-5 p-2 space-y-5'>
            <h1 className='text-2xl font-bold'>Lorem ipsum dolor,niam natus?</h1>

            <p className='text-white text-lg'>rem ipsum dolor,niam natu</p>

            <div className='flex gap-5'>
                <button className='p-5 bg-blue-800 rounded-md text-white'>Ver Video</button>
                <Link to="https://www.holcim.com.mx/" className='p-5 bg-blue-800 rounded-md text-white' >Saber Mas</Link>
                
            </div>

        </div>

        <div className='w-5/6 m-auto py-5 my-2 bg-blue-200 grid grid-cols-2 justify-center items-center '>

          <div className='flex flex-col justify-center items-center space-y-10'>
            <h2 className='font-bold text-2xl'>¿Lorem iere  Aliquam, beatae?</h2>
            <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt!</p>
          </div>
            

            <div className='flex items-center justify-center'>
              <img  src={qr} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Componente2