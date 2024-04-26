import React from 'react'
import { useState } from "react";

import Modal from "../components/Modal";
import Boton from "../components/Boton";

import bosque from "../assets/01-bosque.png";
import configuracion from "../assets/02-configuracion.png";
import dardos from "../assets/03-dardos.png";
import trabajo from "../assets/04-trabajo-en-equipo.png";
import transparencia from "../assets/05-transparencia.png";

import "../styles/informativos.css";

const Informativos = () => {

  const [modalInfo, setModalInfo] = useState({isOpen: false, title: "", content:""});


  const openModal = (title, content, img) => {
    setModalInfo({isOpen: true, title, content, img})

  }

  const closeModal = () => {
    setModalInfo({isOpen: false, title: "", content: ""})
  }



  return (

    <section className=' bg-zinc-300 p-10' >

      <h2 className=' text-center text-3xl p-5 mb-10 font-bold'>Proceso de trabajo de</h2>

      <div className='contenedor2'>

        <div className='item bg-slate-700 w-32 h-32'>

          <Boton onClick={ () => openModal( "Preparacion", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam adipisci nobis explicabo quidem voluptas. Odio eveniet", configuracion)} text="Preparacion"/>

        </div>

        <div className='item bg-slate-700 w-32 h-32'>

          <Boton onClick={ () => openModal( "Proceso", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam adipisci nobis explicabo quidem voluptas. Odio eveniet", transparencia)} text="Proceso"/>

        </div>

        <div className='item bg-slate-700 w-32 h-32'>

          <Boton onClick={ () => openModal( "Trabajo", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam adipisci nobis explicabo quidem voluptas. Odio eveniet", dardos )} text="Trabajo"/>

        </div>

        <div className='item bg-slate-700 w-32 h-32'>

          <Boton onClick={ () => openModal( "Alimentacion", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam adipisci nobis explicabo quidem voluptas. Odio eveniet", trabajo)} text="Alimentacion"/>

        </div>

        <div className='item bg-slate-700 w-32 h-32'>

          <Boton onClick={ () => openModal( "Crecimiento", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam adipisci nobis explicabo quidem voluptas. Odio eveniet", bosque)} text="Crecimiento"/>

        </div>

        {modalInfo.isOpen && (
        <Modal onClose={closeModal} title={modalInfo.title} content={modalInfo.content} img={modalInfo.img} />
        )}

      </div>

    </section>
  )
}

export default Informativos