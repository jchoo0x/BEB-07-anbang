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

    const [NFTInfo, setNFTInfo] = useState([])
    const [userInfo, setUserInfo] = useState({
        user_id: "",
        user_email:"",
    })
    const [contractStatus, setContractStatus] = useState(false);

    // useEffect(() => {
    //     axios
    //       .get("http://localhost:8080")
    //       .then((result) => {
    //         // setNFTInfo([...]);
    //       })
    //       .catch((err) => console.log(err));
    //   }, []);
    
    // 추후에 DB에서 데이터 받아서 map 으로 호출

    return(
        <>  <div className="flex flex-col items-center">
                <p className="flex flex-col mt-20 items-center">보유 NFT 리스트</p>
                <NFT />
            </div>
                <div className="mt-20 ml-20"><p>진행중인 계약</p>
                    <div className="mt-20"><p>보유 토큰 : </p>
                    </div>
                </div>
        </>
    )
}