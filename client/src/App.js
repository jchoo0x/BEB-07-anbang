import './App.css';
import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preview from "./pages/preview";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Token from './pages/Token';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='app'>
        <Header/>
          <Routes>
            <Route path ="/" element={<Preview/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/main" element={<Main />}/>
            <Route path="/main" element={<Token />}/>
          </Routes> 
        <Footer/>

    </div>
  );
}

export default App;