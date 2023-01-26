// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'

// stylesheet
import "../assets/css/main.css";


export default function Preview() {

    return(
        <div className="py-48 mx-8 position: relative justify-center">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="flex flex-row">
                    <div className="mt-36">
                        <h1 className="text-5xl leading-relaxed font-bold">Web 3.0 BlockChain<p>부동산 Dapp</p></h1>
                        <div className="mt-4"><p>블록체인 기반의 안전한 부동산 거래 플랫폼입니다.</p></div>
                        <div className="mt-16">
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">로그인</a>
                        <a className="mx-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">회원가입</a>
                        </div>
                    </div>
                    <div className="ml-36">
                        <img src="https://images.ctfassets.net/9sy2a0egs6zh/5n9UZwFnPyMTphfiT6SDMv/67001204dd8d16fa99070e902c512b9c/home-hero.png?w=1920&q=100&fm=webp"
                        className="w-3/4 mb-8"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}