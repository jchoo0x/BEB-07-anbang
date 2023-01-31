import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preview from "./pages/preview";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Token from "./pages/Token";
import NFTdetail from "./pages/NFTdetail";
import Mypage from "./pages/Mypage";
import Message from "./pages/Message";
import Minting from "./pages/Minting";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isLogin, setIsgLogin] = useState(false);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/token" element={<Token />} />
        <Route path="/NFTdetail" element={<NFTdetail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/minting" element={<Minting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
