// modules
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Postcode from "../components/Postcode";


// stylesheet
import "../assets/css/main.css";

export default function Register() {
  
    const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    console.log(image);
  };


  return (
    <div className="mb-6 pt-4">
      <div className="flex ">
        <div className="mx-auto w-full max-w-lg rounded-lg px-10 py-8 shadow-xl">
          <div className="mx-auto space-y-6">
            설명
            <div className="flex w-full justify-center"></div>
          </div>
        </div>
      </div>

      <label className="mb-5 pt-10 px-10 block text-xl font-semibold text-[#07074D]">
        사진 등록
      </label>

      <div className="mb-8">
        <input
          type="image"
          name="image"
          id="image"
          multiple
          alt=""
          onChange={handleImageChange}
        />
        {imagePreview && <img src={imagePreview} alt="preview" />}
        <label
          for="file"
          className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
        >
          <div>
            <span className="mb-2 block text-xl font-semibold text-[#07074D]">
              Drop files here
            </span>
            <span className="mb-2 block text-base font-medium text-[#6B7280]">
              Or
            </span>
            <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
              Browse
            </span>
          </div>
        </label>
      </div>
      <div className="py-10">
        <label class="mb-5 pt-10 px-10 block text-xl font-semibold text-[#07074D]">
          주소 등록
        </label>
      </div>
      <Postcode />

