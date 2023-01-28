// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

// stylesheet
import "../assets/css/main.css";

export default function Mypage() {

    const [NFTInfo, setNFTInfo] = useState([])

    // useEffect(() => {
    //     axios
    //       .get("http://localhost:")
    //       .then((result) => {
    //         setNFTInfo([....]);
    //       })
    //       .catch((err) => console.log(err));
    //   }, []);
    
    // 추후에 DB에서 데이터 받아서 map 으로 호출

    return(
    <div className="">
        <div className="mt-10 flex flex-row justify-center items-center">
            <button>
            <img className="w-80" src="https://news.samsungdisplay.com/wp-content/uploads/2022/03/IT_tc00480001633_final-1024x449.jpg"></img>
            </button>
        </div>
        <p className="mt-10 flex flex-row justify-center items-center">가격 : 1,000,000 KRW</p>
    </div>

    )
}