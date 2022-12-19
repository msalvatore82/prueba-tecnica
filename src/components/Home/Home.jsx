import "./Home.scss";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import cleverpyTeam from "../../Assets/super/Cleverpy-rotated-e1655822809236-973x1024.jpeg";
import { AiOutlineGithub, AiTwotoneWarning } from "react-icons/ai";

//Descomentar y probar boton de rechazar
// const boton_no = document.getElementsByClassName('button-discard')[0];
// boton_no.onmouseover = () => {
//       boton_no.style.position = "absolute";
//       boton_no.style.left = Math.random()*700 + 'px';
//       boton_no.style.top = Math.random()*700 + 'px';
// }

function Home() {
  return (
    <>
      <div className="home">
        <p className="pretitle">PRUEBA TECNICA</p>
        <span className="title">
          Matias Salvatore Tadey Desarrollador Front End
        </span>
        <p className="text-home">
          Me gustan los retos, el buen gusto, estoy atento a los detalles y me
          enfoco en brindar lo mejor para que los equipos de trabajo que integro
          puedan cumplir con los OBJETIVOS{" "}
        </p>
        <a href="mailto:salvatoretadey.matias@gmail.com">
          {" "}
          <button className="button-accept">
            Aprobar <FaRegThumbsUp style={{ marginLeft: 5, fontSize: 18 }} />{" "}
          </button>{" "}
        </a>
        <a
          href="https://media.tenor.com/aJS-RwwJUxUAAAAC/puss-in-boots-please.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button className="button-discard">
            Rechazar <FaRegThumbsDown style={{ marginLeft: 5, fontSize: 18 }} />{" "}
          </button>
        </a>
      </div>
      <div className="sub-home">
        <div className="text-subhome">
          <p className="pretitle-subhome">SOBRE ESTA PRUEBA</p>
          <span className="title-subhome">FUNCIONALIDAD</span>
          <p className="body-subhome">
            La prueba consiste en diseñar, implementar y conectar un plataforma
            con “cards” para la visualización de posts o comentarios realizados
            por un usuario
          </p>
          <a href="mailto:salvatoretadey.matias@gmail.com">
            <button className="button-test">
              Link archivo{" "}
              <FaRegThumbsUp style={{ marginLeft: 5, fontSize: 18 }} />{" "}
            </button>
          </a>
        </div>
        <div className="img-subhome">
          <img className="img" src={cleverpyTeam} alt="" />
        </div>
      </div>
      <div className="pre-footer">
        <div className="pre-footer-text" > 
          <p className="pre-footer-subtitle">ANTE TODO MUCHAS GRACIAS!!</p>
          <span className="pre-footer-title">
            PUEDEN VER EL REPO DE GITHUB COMO ASI TAMBIEN EL DESPLIEGUE EN
            VERCEL
          </span>
        </div>
        <div className="pre-footer-button">
          <a href="https://github.com/msalvatore82/prueba-tecnica.git" target="_blank" rel="noopener noreferrer">
            <button className="button-pre-footer">
              Repo de la prueba{" "}
              <AiOutlineGithub style={{ marginLeft: 5, fontSize: 18 }} />{" "}
            </button>
          </a>
          <a href="mailto:salvatoretadey.matias@gmail.com">
            <button className="button-pre-footer">
              Despliegue en Vercel{" "}
              <AiTwotoneWarning style={{ marginLeft: 5, fontSize: 18 }} />{" "}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
