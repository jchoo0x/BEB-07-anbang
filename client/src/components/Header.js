// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import useMetamask from "../hooks/useMetamask";
import toggleModal from "../hooks/alarm";

// stylesheet
import "../assets/css/main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    const metamask = useMetamask();

    const getAccount = async ()=>{ // 메타마스크에서 계정 가져오기 
      const account = await window.ethereum.request({ method: 'eth_requestAccounts'})
      .catch((err)=>{ console.log(err.code); });
      console.log( account );
  }
    
return (


<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" className="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/5988/5988246.png" className="h-6 mr-1 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap  justify-items-start">안(安)방</span>
  </a>
  <div className="flex md:order-2">
  <ul className="flex md:auto">
        <li className="px-10">
            <div>
            <FontAwesomeIcon icon={faBell} className="fa-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" />
            </div>
        </li>
        <li className="">
            <div onClick={getAccount}>
            <FontAwesomeIcon icon={faWallet} className="fa-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" />
            </div>
        </li>
    </ul>
  </div>
  <div className="items-center  px-10 hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white">
      <li>
        <Link to = "/main">
        <a className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 nsparent ">Main</a>
        </Link>
      </li>
      <li>
        <Link to = "/token">
        <a className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Token</a>
        </Link>
      </li>
      <li>
        <a href="https://github.com/codestates-beb/BEB-07-anbang" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

)
}
