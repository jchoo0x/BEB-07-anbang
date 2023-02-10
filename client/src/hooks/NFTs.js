// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';
import NFT from "./NFT";

// stylesheet
import "../assets/css/main.css";

export default function NFTList() {
    return(
        <div className="flex flex-wrap max-w-7xl justify-evenly mt-10">
            <NFT />
        </div>
    )
}