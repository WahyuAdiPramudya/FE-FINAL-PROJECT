import Home from "./pages/Home";
import Provinsi from "./pages/Provinsi";
import Indonesia from "./pages/Indonesia";
import About from "./pages/About";
import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// import Province from "./pages/Province";

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/indonesia" element={<Indonesia/>} />
          <Route path="/provinsi" element={<Provinsi/>} />
          <Route path="/about" element={<About/>} />
        </Routes> 
      </Layout>
      {/* <Province /> */}
    </div>
  );
}

export default App;
