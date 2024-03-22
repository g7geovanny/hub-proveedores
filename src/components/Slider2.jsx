import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import Navegacion from "./Navegacion";

import fondo from "../assets/nuevo.svg";
import presentacion from "../assets/presentacion.svg";
import Video from "./Video";


import uno from "../assets/lading.svg";


import "../styles/slider.css";

const Slider2 = () => {

const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1,   },
    { id: 2,   },
    { id: 3,   },
    { id: 4,   },
    { id: 5,   },
    
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };


  return (

    <>

      <Navegacion/>
   

    <div className='slider-container'>

          <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

            <div className="slide grid grid-cols-2 ">

              <div className="degradado w-full h-full flex flex-col justify-center items-center space-y-7">

                <h2 className='text-center font-extrabold text-white uppercase text-5xl'>Factoraje sostenible</h2>

                <p className='font-extrabold text-center text-black text-2xl uppercase'>conoce los beneficios</p>

                <div className='flex justify-center gap-5 '>
                  <div><p className='py-3 pr-2 border-r-4 border-slate-300 text-sm font-bold uppercase'>requisitos</p></div>
                  <div><p className='py-3 pr-2 border-r-4 border-slate-300 text-sm font-bold uppercase'>beneficios en la taza</p></div>
                  <div><p className='py-3 pr-2 border-r-4 border-slate-300 text-sm font-bold uppercase'>empresa sustentable</p></div>
                </div>

              </div>

              <div className=' relative '>
                <Video/>
              </div>

          </div>

          

          <div className="slide ">

            <img className='w-full h-full object-cover' src={fondo} alt="" />
              
          </div>

          <div className="slide">

            <img className='w-full h-full object-cover' src={uno}  alt="" />
  
          </div>

          <div className="slide ">

            <img className='w-full h-full object-cover' src={presentacion}  alt="" />
  
          </div>

          <div className="slide relative ">

            <ReactPlayer
              height="100%"
              width="100%"
              playing={false}
              controls={true}
              loop={true}
              muted={true}
              url="https://www.youtube.com/watch?v=hstDHZRqPe0"
              style={{ 
                position: "absolute",
                top: "0",
                left:"0",
                objectFit: "cover",
              }}
            />
              
          </div>

        </div>


        <button className="prev" onClick={goToPrevSlide}>Anterior</button>
        <button className="next" onClick={goToNextSlide}>Siguiente</button>

    </div>

    </>


  )

}

export default Slider2