// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import MyNFT from "../hooks/MyNFT";

// stylesheet
import "../assets/css/main.css";

export default function Mypage() {

    const [MyNFTInfo, setMyNFTInfo] = useState({
        authorization: ""
    })

    useEffect(() => {
        axios
          .get("http://localhost:8080/mypage/:id", MyNFTInfo)
          .then((result) => {
            setMyNFTInfo([...result.data])
          })
          .catch((err) => console.log(err));
      }, []);
    

    return(

            <div className="flex flex-col items-center">
                <div className="flex flex-row mt-20">
                    <div className="flex items-center font-bold mr-5">보유 NFT 리스트</div>
                <MyNFT />
                <MyNFT />
                <MyNFT />
                </div>
                <div className="flex flex-row mt-20">
                    <div className="flex items-center font-bold mr-5">진행중인 계약</div>
                <p value={MyNFTInfo.authorization}>진행중인 계약 1 </p>
                </div>

                {/* <div className="mt-20">
                    <div className="font-bold mr-5">심사중인 NFT 목록</div>
                </div> */}

            </div>
    )
}