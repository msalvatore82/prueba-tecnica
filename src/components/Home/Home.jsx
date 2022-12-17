import "./Home.scss"
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";


//Descomentar y probar boton de rechazar
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
      <span className='title'>Matias Salvatore Tadey Desarrollador Front End</span>
      <p className='text-home'>Me gustan los retos, el buen gusto, estoy atento a los detalles y me enfoco en brindar lo mejor para que los equipos de trabajo que integro puedan cumplir con los  OBJETIVOS </p>
      <a href="mailto:salvatoretadey.matias@gmail.com"> <button className='button-accept'>Aprobar <FaRegThumbsUp style={{ marginLeft: 5, fontSize: 18 }} />  </button> </a>
      <a href="https://media.tenor.com/aJS-RwwJUxUAAAAC/puss-in-boots-please.gif" target="_blank" rel="noopener noreferrer"> <button className='button-discard'>Rechazar <FaRegThumbsDown style={{ marginLeft: 5, fontSize: 18 }} /> </button></a>
    </div>


  );
}

export default Home