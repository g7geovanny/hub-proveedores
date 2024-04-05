// src/Footer.js
import React from 'react';
import { useLocation } from "react-router-dom";

import facebook from "../assets/iconoFacebook.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tik-tok.png";
import linkedln from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Footer = () => {

  const location = useLocation();
  const locacion = location.pathname
  const colorFondo = locacion === "/"
  return (
    <footer className={ colorFondo ? " bg-white" : " bg-green-400" }>
      <div className="container mx-auto p-5">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Enlaces Útiles</h3>
            <ul className="text-sm">
              <li><a className='font-semibold' href="#">Inicio</a></li>
              <li><a className='font-semibold' href="#">Acerca de</a></li>
              <li><a className='font-semibold' href="#">Servicios</a></li>
              <li><a className='font-semibold' href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <p className="text-sm font-semibold">Correo: ejemplo@correo.com</p>
            <p className="text-sm font-semibold">Teléfono: 123-456-7890</p>
          </div>
          <div className="flex flex-col  items-center w-full md:w-1/2 lg:w-1/4 px-4  md:mb-0">
            <h3 className="text-lg font-bold mb-4">Redes Sociales</h3>
            <ul className="flex gap-5">
              <li><a href="#"><img className=' w-8 h-8 hover:w-12 hover:h-12 transition-all duration-200 ' src={facebook} alt="" /></a></li>
              <li><a href="#"><img className=' w-8 h-8 hover:w-12 hover:h-12 transition-all duration-200 ' src={youtube} alt="" /></a></li>
              <li><a href="#"><img className=' w-8 h-8 hover:w-12 hover:h-12 transition-all duration-200 ' src={tiktok} alt="" /></a></li>
              <li><a href="#"><img className=' w-8 h-8 hover:w-12 hover:h-12 transition-all duration-200 ' src={linkedln} alt="" /></a></li>
              <li><a href="#"><img className=' w-8 h-8 hover:w-12 hover:h-12 transition-all duration-200 ' src={instagram} alt="" /></a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Ubicación</h3>
            <p className="text-sm font-semibold">123 Calle Principal</p>
            <p className="text-sm font-semibold">Ciudad, País</p>
          </div>

          <div className=" w-full flex justify-center items-center">
          <p className="text-sm font-semibold">&copy; 2024 Todos los derechos reservados</p>
        </div>

        </div>
      
        
      </div>
    </footer>
  );
};

export default Footer;
