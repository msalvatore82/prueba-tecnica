import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import logo from "../../Assets/Cleverpy.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="logo" title="ClaverPy">
        <a
          href="https://cleverpy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div>
        <span className="text-nav-home span" title="Home">
          <Link to="/">INICIO</Link>
        </span>
        {user ? (
          <>
            <span className="text-nav-posts span" title="Post">
              <Link to="/posts">POST</Link>
            </span>
            <span className="text-nav-friend span" title="Amigos">
              <Link to="/friends">USUARIOS</Link>
            </span>
            <span
              onClick={onLogout}
              className="ico-nav-logout span"
              title="Cerra sesíon"
            >
              <AiOutlineLogout />
            </span>
          </>
        ) : (
          <>
            <span className="text-nav-login span" title="INICIAR SESION">
              <Link to="/login">
                <AiOutlineLogin />
              </Link>
            </span>
          </>
        )}

        <div className="icons" title="LinkedIn">
          <a
            href="https://www.linkedin.com/in/salvatorematias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="in-ico" />
          </a>
          <a
            href="https://github.com/msalvatore82"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="git-ico" title="Repo Github" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
