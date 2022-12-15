import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Post from "./components/Posts/Post/Post";
import Posts from "./components/Posts/Posts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
