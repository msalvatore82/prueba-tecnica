/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Posts from "./components/Posts/Posts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { FaWhatsapp } from "react-icons/fa";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Friends from "./components/Friends/Friends";
import PrivateZone from "./guards/PrivateZone";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PrivateZone><Posts /></PrivateZone>}/>
          <Route path="/friends" element={<PrivateZone><Friends /></PrivateZone>}/>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <a href="https://acortar.link/P0x3vE"className="btn-flotante" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>

        <Footer />        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
