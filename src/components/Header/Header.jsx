/* eslint-disable jsx-a11y/anchor-has-content */
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/auth/authSlice";
import "./Header.scss";
import { useState } from "react";
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
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + text);
    }
  };

  return (
    <nav>
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
        <span className="text-nav-home" title="Home">
          <Link to="/">HOME</Link>
        </span>
        {user ? (
          <>
            <span className="text-nav-posts" title="Post">
              <Link to="/posts">POST</Link>
            </span>
            <span className="text-nav-friend" title="Amigos">
              <Link to="/friends">AMIGOS</Link>
            </span>
            <span
              onClick={onLogout}
              className="ico-nav-logout"
              title="Cerra sesíon"
            >
              <AiOutlineLogout />
            </span>
            <input
              onKeyUp={handleChange}
              placeholder="search post"
              name="text"
              className="serch-nav"
            />
            {/* <span>
              <Link to="/profile">{user.user.name}</Link>
            </span> */}
          </>
        ) : (
          <>
            <span className="text-nav-login" title="INICIAR SESION">
              <Link to="/login">
                {" "}
                <AiOutlineLogin />{" "}
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
        {/* {user?.user?.role === "admin" ?  <span>
          <Link to="/admin">Admin</Link>
        </span>: ""}  */}
      </div>
    </nav>
  );
};

export default Header;
