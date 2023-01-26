// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'

// stylesheet
import "../assets/css/main.css";

// login & SignUp
// import Login from "../components/Login";
// import signUp from "";

export default function Preview() {

    return(
        <div className="py-48 mx-8 position: relative justify-center">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="flex flex-row">
                    <div className="mt-36">
                        <h1 className="text-5xl leading-relaxed font-bold">Web 3.0 BlockChain<p>부동산 Dapp</p></h1>
                        <div className="mt-4"><p>안방은 블록체인 기반의 부동산 거래 플랫폼입니다.</p></div>
                        <div className="mt-16">
                        {/* <Link to = "/login" component={Login}> */}
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">로그인</a>
                        {/* </Link> */}
                        {/* <Link to = "/signUp" component={signUp}> */}
                        <a className="mx-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">회원가입</a>
                        {/* </Link> */}
                        </div>
                    </div>
                    <div className="ml-36">
                        <img src="https://images.ctfassets.net/9sy2a0egs6zh/5n9UZwFnPyMTphfiT6SDMv/67001204dd8d16fa99070e902c512b9c/home-hero.png?w=1920&q=100&fm=webp"
                        className="w-3/4 mb-8"></img>
                    </div>
                </div>

                <div className="flex flex-row mt-36">
                    <div className="mt-36">
                        <h1 className="text-3xl leading-relaxed font-bold">전세, 월세 계약하고 <p>토큰까지 획득하자</p></h1>
                        <div className="mt-4 leading-10"><p>NFT와 블록체인 기술을 활용한 안방 Dapp은 기존의 부동산 거래와 다르게<p></p>허위매물들이 존재하지 않으며 위변조가 불가능한 계약, 사용자를 위한 토큰 서비스를 제공합니다.</p></div>
                        <div className="mt-16">
                    
                        </div>
                    </div>
                    <div className="ml-36">
                        <img src="https://images.ctfassets.net/9sy2a0egs6zh/78HoDbPwuWz8M6er6joJdE/c440f3e5d7262a424f13da69a46e958a/wallet-illo.svg"
                        className="w-3/4 mb-8"></img>
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
                            <h1 className="text-3xl leading-relaxed font-bold">간편하게 쇼핑하듯 구매하고 <p>걱정없이 계약할 수 있습니다</p></h1>
                            <p>모든 매물은 NFT로 등록해서 보여주기 때문에 허위매물이 존재하지 않습니다<p></p>스마트 컨트랙트를 활용해 위변조가 불가능한 계약을 실행하고 블록체인에 계약서를 공개해 누구나 확인할 수 있습니다.
                            </p>
                        </div>
                </div>

                <div className="flex flex-row mt-20">
                    <div className="mt-20">
                        <h1 className="text-3xl leading-relaxed font-bold">낮은 수수료로 계약하고<p>토큰까지 활용할 수 있습니다</p></h1>
                        <div className="mt-4 leading-10"><p>낮은 중개수수료와 제 3자의 개입이 없습니다<p></p>다양한 활동을 할 때마다 토큰을 지급받고 이를 다양한 서비스에 이용할 수 있습니다.</p></div>
                        <div className="mt-16">
                    
                        </div>
                    </div>
                    <div className="ml-36">
                        <img src="https://images.ctfassets.net/9sy2a0egs6zh/Cgl4g0Z2URG5PhRXT7CjP/54984377c95ba08d7aa5b36acb038b61/Browse-illo.svg"
                        className="w-3/4 mb-8"></img>
                    </div>
                </div>


            </div>
            <div className="mt-36 grid place-items-center">
                    <div className="mt-20">
                        <h1 className="text-3xl leading-relaxed font-bold flex justify-center items-center"><p>다양한 혜택 받아보기</p></h1>
                        <div className="mt-4 leading-10"><p>다양한 활동을 할 때마다 토큰을 지급받고 이를 다양한 서비스에 이용할 수 있습니다.</p></div>
                            <div className="mt-10 flex justify-center items-center">
                            {/* <Link to = "/signUp" component={signUp}> */}
                                <a className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">회원가입</a>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
        </div>
    )
}