// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// stylesheet
import "../assets/css/main.css";

export default function Mypage(props) {

    const [NFTInfo, setNFTInfo] = useState({
        nft_address: "", // 건물주소
        nft_imgURL: "",
        nft_type: "", // 건물 종류
    })
    const navigate = useNavigate();

    const NFTClick = () => {
        navigate("/NFTdetail", { state: {} });
      };

    useEffect(() => {
        axios
          .get("http://localhost:8080/minting", NFTInfo)
          .then((result) => {
            setNFTInfo([...result.data])
          })
          .catch((err) => console.log(err));
      }, []);
    

    return(
    // <div className="">
    //     {NFTInfo.map((post)=> (
    //         <div>
    //         <div className="mt-5 w-[340px] h-[270px] rounded-xl mb-5">
    //         <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
    //         <img onClick={()=> NFTClick()} 
    //         className="w-full h-[200px] object-cover rounded-t-lg" 
    //         src={NFTInfo.nft_imgURL}></img>
    //             <p className="mt-10 flex flex-row justify-center items-center">{`임대종류 : ${NFTInfo.nft_type}`}</p>
    //             <p className="mt-5 flex flex-row justify-center items-center">{`주소 : ${NFTInfo.nft_address}`}</p>    
    //         </div>
    //     </div>
    //     </div>
    //     ))}
    // </div>

 
    <div className="mt-5 w-[340px] h-[270px] rounded-xl mb-5">
        <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img className="w-full h-[200px] object-cover rounded-t-lg" onClick={()=> NFTClick()} 
            src="https://news.samsungdisplay.com/wp-content/uploads/2022/03/IT_tc00480001633_final-1024x449.jpg" alt=""></img>
            <div className="flex justify-between px-2 py-2">
                <div className="flex flex-col items-center">
                    <h3>가격</h3>
                    <h3>임대종류</h3>
                </div>
            </div>
        </div>
    </div> 


    )
}