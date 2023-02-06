// modules
import {useState} from "react";
import React from "react"
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import axios from "axios"
import {useNavigate} from "react-router-dom"

// stylesheet
import "../assets/css/main.css";

export default function Report( {closeModal} ){
    
    const [sendReport, setSendReport] = useState("")

    const navigate = useNavigate();

    const handleInputValue = (key) => (e) => {
        setSendReport({...sendReport, [key]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(sendReport) {
        axios.post("http://localhost:8080/declaration", sendReport)
        .then((result)=> {
            console.log(result)
            setSendReport({sendReport})
            navigate("/main")
        .catch((e)=> console.log(e))
        })
        }
    }

    return(
        <div className="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
            <div className="bg-white rounded w-10/12 md:w1/3">
                <div className="font-extrabold"><h1>NFT 정보 오류 신고</h1></div>
                <div className="mt-2"><p>NFT 정보와 등기부 등본 정보가 다르면 확인 후 토큰을 지급합니다.</p></div>
                <div className="mt-5">
                    <input 
                    onChange={handleInputValue("sendReport")}
                    className="w-1/2 border-gray-500 border-2" placeholder="잘못된 정보를 입력하세요"></input>
                </div>
                <button className="mt-5 mb-5" onSubmit={handleSubmit}>신고하기</button>
                <button className="mx-10" onClick={()=> closeModal(false)}>닫기</button>
            </div>
        </div>
    )
}