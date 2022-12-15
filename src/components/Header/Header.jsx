/* eslint-disable jsx-a11y/anchor-has-content */
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/auth/authSlice";
import "./Header.scss";
import { useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import logo from "../../Assets/Cleverpy.jpg";

const Header = () => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state.auth);
  //   const onLogout = (e) => {
  //     e.preventDefault();
  //     dispatch(logout());
  //     navigate("/login");
  //   };
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + text);
    }
  };

  return (
    <nav>
      <div className="logo">
        <a
          href="https://cleverpy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div>
        <span className="text-nav-home">
          <Link to="/">HOME</Link>
        </span>
        <span className="text-nav-login">
          <Link to="/login">LOGIN</Link>
        </span>
        {/* <span className="text-nav-post">
          <Link to="/post">post</Link>
        </span> */}
        <span className="text-nav-posts">
          <Link to="/posts">POST</Link>
        </span>
        <input
          onKeyUp={handleChange}
          placeholder="search post"
          name="text"
          className="serch-nav"
        />
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/salvatorematias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedin className="in-ico" />
          </a>
          <a
            href="https://github.com/msalvatore82"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithubSquare className="git-ico" />
          </a>
        </div>
        {/* {user?.user?.role === "admin" ?  <span>
          <Link to="/admin">Admin</Link>
        </span>: ""}  */}

        {/* {user ? (
          <>
            <span onClick={onLogout}>Logout</span>
            <span>
              <Link to="/profile">{user.user.name}</Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </>
        )} */}
      </div>
    </nav>
  );
};

export default Header;
