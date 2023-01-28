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
                <div className="flex flex-col items-center">
                    <div className="mt-36">
                        <h1 className="text-5xl leading-relaxed font-bold">토큰이란?<p></p></h1>
                        <div className="mt-4"><p>토큰은 안방 플랫폼에서 제공되는 서비스를 이용할 수 있는 화폐입니다.</p>
                        <br/>다양한 활동을 통해 토큰을 획득하고 사용할 수 있습니다.
                        </div>

                    </div>
                </div>

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
                        {/* <p className="mt-6 font-bold">4. 누구나 잘못된 정보를 신고하면 토큰을 획득합니다</p> */}
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mt-28">
                    <div className="mt-20">
                        <div className="ml-36">
                            <img src="https://images.ctfassets.net/9sy2a0egs6zh/5w0q0fWbGtmiSts6oIDJ5x/6746f0e6d562c0e8315d841eb4c85f87/Explore-illo.svg"
                            className="w-3/4 mb-8"></img>
                        </div>
                    </div>
                        <div className="mt-20 leading-10">
                            <h1 className="text-3xl leading-relaxed font-bold"><p>월세 or 공과금 납부하기</p></h1>
                             <p className="mt-6">토큰을 사용해서 월세 및 공과금을 납부할 수 있습니다.</p>
                            <div className="mt-4 flex flex-row items-center">
                                <Link to = "/">
                                    <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">납부하기</a>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="flex flex-row mt-20">
                    <div className="mt-20">
                        <div className="ml-36">
                            <img src="https://images.ctfassets.net/9sy2a0egs6zh/5w0q0fWbGtmiSts6oIDJ5x/6746f0e6d562c0e8315d841eb4c85f87/Explore-illo.svg"
                            className="w-3/4 mb-8"></img>
                        </div>
                    </div>
                        <div className="mt-20 leading-10">
                            <h1 className="text-3xl leading-relaxed font-bold"><p>이사업체 및 청소업체 고용하기</p></h1>
                             <p className="mt-6">토큰을 사용해서 이사업체 및 청소업체를 고용할 수 있습니다</p>
                            <div className="mt-4 flex flex-row items-center">
                                <Link to = "/">
                                    <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">계약하기</a>
                                </Link>
                            </div>
                        </div>
                </div>

            </div>            
        </div>
    )
}