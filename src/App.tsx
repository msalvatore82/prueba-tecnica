/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Post from "./components/Posts/Post/Post";
import Posts from "./components/Posts/Posts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { FaWhatsapp } from "react-icons/fa";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Friends from "./components/Friends/Friends";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      <a href="https://acortar.link/P0x3vE" className="btn-flotante" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /> </a>

    </div>
  );
}

export default App;
