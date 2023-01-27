// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'

// stylesheet
import "../assets/css/main.css";

export default function NFT() {

    const [NFT, setNFT] = useState({
        NFT_address: "", // 건물 실제 주소
        NFT_image: "", // 건물 이미지
        NFT_category: "", // 건물 형태 아파트or빌라
    });

    return (
        <></>
        )
}