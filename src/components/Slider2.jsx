import React, { useState } from 'react'

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
    { id: 2,    },
    { id: 3,   },
    { id: 4,   }
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };


  return (

    <div className='slider-container'>

      <Navegacion/>

        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>


          <div className="slide relative ">
          
            <Video/>
          
          </div>


          <div className="slide w-full">

          <img className='w-full h-full object-cover' src={fondo} alt="" />
              
          </div>


          <div className="slide  w-full h-[30rem]">

            <img className='w-full h-full object-cover' src={uno}  alt="" />
  
          </div>

          <div className="slide  w-full h-[30rem]">

            <img className='w-full h-full object-cover' src={presentacion}  alt="" />
  
          </div>


        </div>


        <button className="prev" onClick={goToPrevSlide}>Anterior</button>
        <button className="next" onClick={goToNextSlide}>Siguiente</button>

    </div>


  )

}

export default Slider2