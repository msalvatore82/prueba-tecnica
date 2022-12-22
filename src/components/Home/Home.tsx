import "./Home.scss";
import { FaRegThumbsUp, FaRegThumbsDown, FaAws } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineGithub } from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home">
        <p className="pretitle">PRUEBA TECNICA</p>
        <p className="title">Matias Salvatore Tadey Desarrollador Front End
        </p>
        <p className="text-home">
          Me gustan los retos, el buen gusto, estoy atento a los detalles y me
          enfoco en brindar lo mejor para que los equipos de trabajo que integro
          puedan cumplir con los OBJETIVOS
        </p>
        <a href="mailto:salvatoretadey.matias@gmail.com">          
          <button className="button-accept">
            Aprobar <FaRegThumbsUp style={{ marginLeft: 5, fontSize: 18 }} />
          </button>
        </a>
        <a
          href="https://media.tenor.com/aJS-RwwJUxUAAAAC/puss-in-boots-please.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-discard">
            Rechazar <FaRegThumbsDown style={{ marginLeft: 5, fontSize: 18 }} />
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
          <a href="https://drive.google.com/file/d/1RwR5TdMTnjyFssQUP1PmiFcaK_KEAR94/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="button-test">
              Link archivo
              <AiOutlineArrowRight style={{ marginLeft: 5, fontSize: 18 }} />
            </button>
          </a>
        </div>
        <div className="img-subhome">
          <img className="img" src="https://cleverpy.com/wp-content/uploads/2022/06/Cleverpy-rotated-e1655822809236.jpeg" alt="" />
        </div>
      </div>
      <div className="pre-footer">
        <div className="pre-footer-text" > 
          <p className="pre-footer-subtitle">ANTE TODO MUCHAS GRACIAS!!</p>
          <span className="pre-footer-title">
            PUEDEN VER EL REPO DE GITHUB COMO ASI TAMBIEN EL DESPLIEGUE EN
            AWS SERVICE
          </span>
        </div>
        <div className="pre-footer-button">
          <a href="https://github.com/msalvatore82/prueba-tecnica.git" target="_blank" rel="noopener noreferrer">
            <button className="button-pre-footer">
              Repo de la prueba
              <AiOutlineGithub style={{ marginLeft: 5, fontSize: 18 }} />
            </button>
          </a>
          <a href="https://main.d3bowlpwv2y67a.amplifyapp.com/">
            <button className="button-pre-footer">
              Despliegue AWS 
              <FaAws style={{ marginLeft: 5, fontSize: 18 }} />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
