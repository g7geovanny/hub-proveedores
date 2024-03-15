import React, { useState } from 'react'

import Navegacion from "./Navegacion";
import uno from "../assets/imagen10.svg";
import dos from "../assets/imagen11.svg";
import tres from "../assets/imagen12.jpg";

import Video from "./Video";



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

          <div className="slide ">
          
            <Video/>
          
          </div>

          <div className="slide slideDos">
              
          </div>

          <div className="slide slideTres">
            
          </div>

          <div className="slide slideCuatro">
              
          </div>

         </div>


        <button className="prev" onClick={goToPrevSlide}>Anterior</button>
        <button className="next" onClick={goToNextSlide}>Siguiente</button>

    </div>


  )

}

export default Slider2