<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello
        <Login></Login>
      </header>
=======
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< main
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="app">
      <Header />

      {/* <Routes>
=======
import Preview from "./pages/preview";

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='app'>
        <Header/>
        <Preview/>
        {/* <Routes>
>>>>>>> dev
          <Route path ="/" element={<Main />}/>
          <Route path="/mypage" element={<Mypage account={account}/>}/>
          <Route path="/mint" element={<Mint />}/>
          <Route path="/view" element={<View/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />}/>
        </Routes> */}
<<<<<<< main
      <Footer />
=======

        <Footer/>

>>>>>>> dev
>>>>>>> da85ecde4d5d992dd24dc24df896a93244c70bf0
    </div>
  );
}

export default App;
