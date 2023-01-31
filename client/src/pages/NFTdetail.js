// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { useLocation } from 'react-router-dom';
import NFTList from "../components/NFTList";

// stylesheet
import "../assets/css/main.css";

export default function NFTdetail() {

    const location = useLocation();

    const tokenID = location.state.tokenID; // 토큰 ID
    const deposit = location.state.deposit; // 보증금
    const loan = location.state.loan // 대출
    const image = location.state.image // 건물 이미지
    const cost = location.state.cost // 월세 or 관리비
    const rentKinds = location.state.rentKinds // 임대 종류 전세 or 월세
    const userId = location.state.userId // 

    return(
        <div className="flex flex-col mt-20 items-center">
            <img src={image}></img>
            <div id="userId">{userId}</div>
            <div id="cost">{`월세 or 관리비 ${cost}`}</div>
            <div id="deposit">{`보증금 : ${deposit}`}</div>
            <div id="rentKinds">{`임대 종류 : ${rentKinds}`}</div>
            <div id="loan">{`대출 유무 : ${loan}`}</div>
        </div>
    )
}