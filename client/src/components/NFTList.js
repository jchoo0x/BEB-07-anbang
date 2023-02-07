// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { Navigate } from "react-router-dom";

// stylesheet
import "../assets/css/main.css";

export default function NFTList() {

    const [NFT, setNFT] = useState({
        NFT_address: "", // 건물 실제 주소
        NFT_image: "", // 건물 이미지
        NFT_category: "", // 건물 형태 아파트or빌라
        // NFT_info: "" // 건물 등기부 등본? 
    });

    const NFTClick = (NFT_address, NFT_image, NFT_category) =>{
        Navigate("/NFTdetail")
    };

    return (
        <div className="NFT" onClick={()=>{
            NFTClick(
                
            )
        }}>
            {((e)=>{
                return(
                    <div>
                        <div>{NFT.NFT_address}</div>
                        <img src={NFT.NFT_image}></img>
                        <div>{NFT.NFT_category}</div>
                        {/* <div>{NFT.NFT_info}</div> */}
                    </div>
                )
            })}
        </div>
        )
}