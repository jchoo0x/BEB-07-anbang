// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { useLocation } from 'react-router-dom';
import NFTList from "../components/NFTList";
import axios from "axios"
import Report from "../hooks/Report";
import Modal from 'react-modal';

// stylesheet
import "../assets/css/main.css";

export default function NFTdetail() {

    const location = useLocation();

    const [openModal, setOpenModal] = useState(false);

    // const tokenID = location.state.tokenID; // 토큰 ID
    const deposit = location.state.deposit; // 보증금
    const image = location.state.nft_imgURL // 건물 이미지
    const cost = location.state.rental // 월세 or 관리비
    const rentKinds = location.state.nft_types // 임대 종류 전세 or 월세
    const description = location.state.description // 설명
    const address = location.state.nft_address // 건물주소

    return(
    <div className="w-full py-[10rem] px-4 bg-white absoulte">
        <div>
            <div className="flex flex-col mt-20 items-center max-w-[1240px] mx-auto">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img  className="w-full mx-auto mt-[-3rem]" src={image}></img>
                    <div id="userId">{`주소: ${address}`}</div>
                    <div id="cost">{`월세 ${cost}`}</div>
                    <div id="deposit">{`보증금 : ${deposit}`}</div>
                    <div id="description">{`${description}`}</div>
                    <div id="rentKinds">{`임대 종류 : ${rentKinds}`}</div>
                    <div className="flex flex-col items-end">
                        <button onClick={()=> {setOpenModal(true)}} 
                        className="mx-10 inline-flex text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">오류 신고하기
                        </button>
        </div>
                </div>
                <div className="mt-10 flex flex-row items-center">
                        <Link to = "/contract">
                                <a className="mx-10 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">계약하기</a>
                        </Link>
                        <Link to = "/message">
                                <a className="mx-10 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">연락하기</a>
                        </Link>
                </div>
            </div>
        </div>
        {openModal && <Report closeModal={setOpenModal}/>}
    </div>

    )
}