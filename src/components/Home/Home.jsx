import React from 'react'
import "./Home.scss"
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

// const boton_no = document.getElementsByClassName('button-discard')[0];
    
// boton_no.onmouseover = () => {
//       boton_no.style.position = "absolute";
//       boton_no.style.left = Math.random()*700 + 'px';
//       boton_no.style.top = Math.random()*700 + 'px';
// }

function Home() {
  return (
    <div className='home'>
      <p className='pretitle'>PRUEBA TECNICA</p>
      <span className='title'>Matias Salvatore desarrollador Front End</span>
      <p className='text-home'>Me gusta los retos y me enfoco en brindar lo mejor para que el equipo de trabajo pueda cumplir con los Objetivos</p>
      <button className='button-accept'>Aprobar <FaRegThumbsUp style={{ marginLeft: 5, fontSize: 18 }} />  </button>
      <button className='button-discard'>Rechazar <FaRegThumbsDown style={{ marginLeft: 5, fontSize: 18 }} /> </button>
    </div>


  );
}

export default Home