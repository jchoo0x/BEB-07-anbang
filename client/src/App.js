import './App.css';
import React, {useState} from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

        <Header/>
        <Routes>
          {/* <Route path ="/" element={<Main />}/>
          <Route path="/mypage" element={<Mypage account={account}/>}/>
          <Route path="/mint" element={<Mint />}/>
          <Route path="/view" element={<View/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />}/> */}
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
