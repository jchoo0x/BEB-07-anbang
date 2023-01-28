// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import NFTList from "../hooks/NFTList";

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
        <>
        <p className="flex flex-col mt-20 items-center">보유 NFT 리스트</p>
        <NFTList/>
        </>
    )
}