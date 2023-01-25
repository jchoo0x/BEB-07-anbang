import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="app">
      <Header />

      {/* <Routes>
          <Route path ="/" element={<Main />}/>
          <Route path="/mypage" element={<Mypage account={account}/>}/>
          <Route path="/mint" element={<Mint />}/>
          <Route path="/view" element={<View/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />}/>
        </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
