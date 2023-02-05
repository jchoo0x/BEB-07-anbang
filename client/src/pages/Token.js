// modules
import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import axios from "axios"


// stylesheet
import "../assets/css/main.css";



export default function Token() {





    return(
        <div className="mx-8 flex flex-col items-center">
            <div className="">

                <div className='w-full py-[10rem] px-4 bg-white'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://play-lh.googleusercontent.com/_ki_xbYoNgr475A2EJKb5YQJjwi3FHZcyDNKtyDemEZjZaMMiE8vF29czk8wxO3tvg" alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>각종 비용 납부</h2>
                        <p className='text-center text-4xl font-bold'>부동산 관련 비용</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>월세 납부기능</p>
                            <p className='py-2 border-b mx-8'>각종 공과금 납부기능</p>
                            <p className='py-2 border-b mx-8'>은행 업무 기능</p>
                        </div>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>납부하기</button>
                    </div>
                    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src="https://cdn-icons-png.flaticon.com/512/5988/5988246.png" alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>수수료 결제</h2>
                        <p className='text-center text-4xl font-bold'>안방 서비스 이용</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>부동산 계약 수수료</p>
                            <p className='py-2 border-b mx-8'>NFT 등록 수수료</p>
                            <p className='py-2 border-b mx-8'>광고 수수료</p>
                        </div>
                        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>시작하기</button>
                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkijpvMXVCTOwZYLzzQar9L54ciwrAbJ6JQ&usqp=CAU" alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>부가 서비스</h2>
                        <p className='text-center text-4xl font-bold'>편의제공 서비스</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>이용자를 위한 편의제공</p>
                            <p className='py-2 border-b mx-8'>시설 관리 이용 서비스</p>
                            <p className='py-2 border-b mx-8'>각종 업체 연계</p>
                        </div>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>이용하기</button>
                    </div>
                </div>
                </div>
             <div className='w-full py-10 px-4 bg-white flex flex-col items-center'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://cdn-icons-png.flaticon.com/512/2165/2165640.png" alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>토큰 획득 방법</h2>
                        <p className='text-center text-4xl font-bold'>안방 플랫폼 이용 시 획득</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>임대인과 임차인은 계약 성사 시 토큰을 획득</p>
                            <p className='py-2 border-b mx-8'>임대인은 건물을 NFT로 등록하면 토큰을 획득합니다</p>
                            <p className='py-2 border-b mx-8'>잘못된 부동산 정보를 신고하면 토큰을 획득</p>
                        </div>
                    </div>

                    <div className='w-full shadow-xl flex flex-col justify-between p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://cdn-icons-png.flaticon.com/512/2810/2810177.png" alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>토큰 사용처</h2>
                        <p className='text-center text-4xl font-bold'>안방 연계 서비스 이용</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>이사업체 예약하기 서비스</p>
                            <p className='py-2 border-b mx-8'>청소업체 이용 서비스</p>
                            <p className='py-2 border-b mx-8'>각종 시설 공사 이용 서비스</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


    
