// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import NFT from "../hooks/NFT";

// stylesheet
import "../assets/css/main.css";

export default function Mypage() {

    const [MyNFTInfo, setMyNFTInfo] = useState({
        // 
    })
    const [contractStatus, setContractStatus] = useState(false);

    useEffect(() => {
        axios
          .get("http://localhost:8080/minting", MyNFTInfo)
          .then((result) => {
            setMyNFTInfo([...result.data])
          })
          .catch((err) => console.log(err));
      }, []);
    

    return(

            <div className="flex flex-col items-center">
                <div className="flex flex-row mt-20">
                    <p className="flex items-center font-bold mr-5">보유 NFT 리스트</p>
                <NFT />
                <NFT />
                <NFT />
                </div>
                <div className="flex flex-row mt-20">
                    <p className="flex items-center font-bold mr-5">진행중인 계약</p>
                <NFT />
                </div>

                <div className="mt-20">
                    <p className="font-bold mr-5">심사중인 NFT 목록</p>
                </div>

            </div>
    )
}