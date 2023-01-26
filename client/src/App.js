import './App.css';
import React, {useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Preview from "./pages/preview";

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='app'>
        <Header/>
        <Preview/>
        {/* <Routes>
          <Route path ="/" element={<Main />}/>
          <Route path="/mypage" element={<Mypage account={account}/>}/>
          <Route path="/mint" element={<Mint />}/>
          <Route path="/view" element={<View/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />}/>
        </Routes> */}

        <Footer/>

    </div>
  );
}

export default App;