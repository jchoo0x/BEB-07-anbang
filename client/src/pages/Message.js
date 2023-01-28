// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import NFTList from "../components/NFTList";

// stylesheet
import "../assets/css/main.css";

export default function Message() {


    return(
<div class="container mx-auto">
  <div class="flex flex-col">
    <div class="bg-gray-200 p-4 rounded-lg overflow-y-scroll" id="chat-messages">
    </div>
    <form class="bg-white p-4 rounded-lg">
      <input type="text" class="w-full rounded-lg p-2" placeholder="Enter your message..." id="message-input"/>
      <button class="bg-blue-500 text-white rounded-lg p-2" type="submit" id="send-button">Send</button>
    </form>
  </div>
</div>


    )
}