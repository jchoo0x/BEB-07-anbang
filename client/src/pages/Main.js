// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import NFTList from "../components/NFTList";

// stylesheet
import "../assets/css/main.css";

export default function Main() {


    return(
        <div className="mx-8 position: relative justify-center">
            <div className="grid place-items-center">
                <div className="flex flex-row">
                    <div className="mt-10">
                        <div className="grid place-items-center">
                                <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                                    <a href="/"><button type="button" className="rounded-l inline-block px-6 py-2.5 bg-stone-600/50 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">My page</button></a>
                                    <a href="/"><button type="button" className="inline-block px-6 py-2.5 bg-stone-600/50 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">NFT 등록</button></a>
                                    <a herf="/"><button type="button" className="rounded-r inline-block px-6 py-2.5 bg-stone-600/50 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">메세지</button></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <NFTList/> */}
        </div>
    )
}