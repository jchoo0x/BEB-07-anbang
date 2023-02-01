// modules
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Postcode from "../components/Postcode";
import DragDrop from "../components/DragDrop";
// stylesheet
import "../assets/css/main.css";

export default function Register() {
  return (
    <div className="mb-6 pt-4">
      <div className="flex ">
        <div className="mx-auto w-full max-w-lg rounded-lg px-10 py-8 shadow-xl">
          <div className="mx-auto space-y-6">
            설명문
            <div className="flex w-full justify-center"></div>
          </div>
        </div>
      </div>
      <label className="mb-5 pt-10 px-10 block text-xl font-semibold text-[#07074D]">
        사진 등록
      </label>
      <DragDrop />
      <div className="py-10">
        <label class="mb-5 pt-10 px-10 block text-xl font-semibold text-[#07074D]">
          주소 등록
        </label>
      </div>
      <Postcode />
      <label class="mb-5 pt-10 px-10 block text-xl font-semibold text-[#07074D]">
        등기부등본 등록
      </label>
      <DragDrop />
    </div>
  );
}
