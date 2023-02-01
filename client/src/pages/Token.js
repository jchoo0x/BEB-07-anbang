// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';


// stylesheet
import "../assets/css/main.css";

export default function Token() {
    return(
        <div className="mx-8 flex flex-col items-center">
            <div className="">
                <div className="flex flex-row items-center">
                    <div className="mt-20 mx-10">
                        <h1 className="text-5xl leading-relaxed font-bold">토큰 획득 방법<p></p></h1>
                        <div className="mt-8 font-bold"><p>1. 임대인과 임차인은 계약 성사 시 토큰을 획득합니다</p>
                        <p className="mt-6 font-bold">2. 임차인은 월세나 공과금을 기간 내 납부하면 토큰을 획득합니다</p>
                        <p className="mt-6 font-bold">3. 임대인은 건물을 NFT로 등록하면 토큰을 획득합니다</p>
                        <p className="mt-6 font-bold">4. 누구나 잘못된 정보를 신고하면 토큰을 획득합니다</p>
                        </div>
                    </div>
                    <div className="mt-20 mx-10">
                        <h1 className="text-5xl leading-relaxed font-bold">토큰 사용처<p></p></h1>
                        <div className="mt-8 font-bold"><p>1. 부동산 계약 수수료를 위해 토큰이 사용됩니다</p>
                        <p className="mt-6 font-bold">2. 토큰을 사용해서 플랫폼에서 제공하는 서비스를 이용할 수 있습니다</p>
                        <p className="mt-6 font-bold">3. 월세나 공과금 납부를 토큰으로 대신 사용할 수 있습니다</p>
                        </div>
                    </div>
                </div>

                <div className='w-full py-[10rem] px-4 bg-white'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src="" alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>각종 비용 납부</h2>
                        <p className='text-center text-4xl font-bold'>1 토큰</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>월세 납부기능</p>
                            <p className='py-2 border-b mx-8'>각종 공과금 납부기능</p>
                            <p className='py-2 border-b mx-8'>은행 업무 기능</p>
                        </div>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>납부하기</button>
                    </div>
                    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src="" alt="/" />
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
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src="" alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>부가 서비스</h2>
                        <p className='text-center text-4xl font-bold'>편의제공 서비스</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>이사업체 비용</p>
                            <p className='py-2 border-b mx-8'>청소비용</p>
                            <p className='py-2 border-b mx-8'>각종 공사비용</p>
                        </div>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>이용하기</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


    
