import React, { useState } from 'react';

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' }
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  
  return (
    <div className="w-full h-40rem  overflow-hidden bg-red-600">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-full transform transition-transform duration-500 ${
            currentSlide === index ? 'left-0' : '-translate-x-full'
          } h-full w-full bg-gray-200 flex items-center justify-center text-3xl`}
        >
          {slide.content}
        </div>
      ))}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-black text-white px-4 py-2"
        onClick={goToPrevSlide}
      >
        Anterior
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-black text-white px-4 py-2"
        onClick={goToNextSlide}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Slider;
