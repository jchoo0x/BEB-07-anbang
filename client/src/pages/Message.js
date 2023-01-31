// modules
import {useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

// stylesheet
import "../assets/css/main.css";

export default function Message() {

    const [selectedUser, setSelectedUser] = useState('나');
    const [messages, setMessages] = useState([
      
      {
        user: '상대방 유저',
        message: 'Hi there!',
        timestamp: new Date(),
      },
    ]);
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setMessages([
        ...messages,
        {
          user: selectedUser,
          message: inputValue,
          timestamp: new Date(),
        },
      ]);
      setInputValue('');
    
    // server 연결하면 알림 API 사용 가능
    if (Notification.permission === 'granted') {
        new Notification(`New message from ${selectedUser}: ${inputValue}`);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification(
              `New message from ${selectedUser}: ${inputValue}`
            );
          }
        });
      }
    };

    return (
        <div className="flex h-screen bg-gray-100">
          <div className="w-1/3 p-4">
            <h1 className="text-3xl font-bold mb-4">메세지</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="selected-user"
              >
                Select User:
              </label>
              <select
                id="selected-user"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectedUser}
                onChange={(event) => setSelectedUser(event.target.value)}
              >
                <option value="User 2">상대방 유저</option> 
              </select>
            </div>
          </div>
          <div className="w-2/3 p-4 overflow-y-auto">
            <ul>
              {messages.map((message, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-200 bg-white rounded-lg shadow mb-2"
                >
                  <strong className="text-gray-700 font-medium">
                    {message.user}
                  </strong>
                  : {message.message}{' '}
                  <em className="text-gray-500">
                    ({message.timestamp.toLocaleString()})
                  </em>
                </li>
              ))}
            </ul>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                />
                <button
                  type="submit"
                  className="block mt-4 appearance-none w-full bg-indigo-500 text-white font-medium border border-transparent hover:bg-indigo-600 rounded px-4 py-2 shadow-md focus:outline-none focus:shadow-outline"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        );
    };