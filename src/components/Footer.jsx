// src/Footer.js
import React from 'react';

import facebook from "../assets/iconoFacebook.svg";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tik-tok.png";
import linkedln from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
            <ul className="text-sm">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm">Correo: ejemplo@correo.com</p>
            <p className="text-sm">Teléfono: 123-456-7890</p>
          </div>
          <div className="flex flex-col  items-center w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <ul className="flex gap-5">
              <li><a href="#"><img className=' w-10 h-10 hover:w-12 hover:h-12 transition-all duration-200 ' src={facebook} alt="" /></a></li>
              <li><a href="#"><img className=' w-10 h-10 hover:w-12 hover:h-12 transition-all duration-200 ' src={youtube} alt="" /></a></li>
              <li><a href="#"><img className=' w-10 h-10 hover:w-12 hover:h-12 transition-all duration-200 ' src={tiktok} alt="" /></a></li>
              <li><a href="#"><img className=' w-10 h-10 hover:w-12 hover:h-12 transition-all duration-200 ' src={linkedln} alt="" /></a></li>
              <li><a href="#"><img className=' w-10 h-10 hover:w-12 hover:h-12 transition-all duration-200 ' src={instagram} alt="" /></a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
            <p className="text-sm">123 Calle Principal</p>
            <p className="text-sm">Ciudad, País</p>
          </div>
        </div>
        <hr className="border-t border-white my-6" />
        <div className="text-center">
          <p className="text-sm">&copy; 2024 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
