// modules
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

export default function Alarm() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
      };
      
    
    return (
        <div>
          <button onClick={toggleModal} className="bg-blue-500 p-2 rounded">
            Show Notification
          </button>
          {isOpen && (
            <div className="fixed bottom-0 right-0 m-6 p-6 bg-white rounded shadow">
              <p className="font-bold">You have a new notification!</p>
              <p className="text-gray-600">Click to dismiss</p>
              <button
                onClick={toggleModal}
                className="bg-red-500 p-2 rounded mt-4"
              >
                Dismiss
              </button>
            </div>
          )}
        </div>
      );
}