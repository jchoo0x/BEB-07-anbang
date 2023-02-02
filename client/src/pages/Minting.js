// modules
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Postcode from "../components/Postcode";

// stylesheet
import "../assets/css/main.css";

export default function Register() {
  const [imgChange, setimgChange] = useState(null);
  const [fileChange, setFileChange] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImgChange = (event) => {
    setimgChange(event.target.files[0]);
    console.log(imgChange);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };
  const handleFileChange = (event) => {
    setFileChange(event.target.files[0]);
    console.log(fileChange);
  };

  return (
    <div className="mb-6 pt-4 mt-20">
             <div className='w-full py-10 px-4 bg-white flex flex-col items-center'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-1 gap-8'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://png.pngtree.com/png-vector/20220520/ourlarge/pngtree-contract-writing-icon-color-flat-png-image_4702613.png" alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>NFT 등록</h2>
                        <p className='text-center text-4xl font-bold'>매물 등록 하는 방법</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>실제 매물 사진을 등록해야 합니다</p>
                            <p className='py-2 border-b mx-8'>최신 등기부 등본을 등록해야 합니다</p>
                            <p className='py-2 border-b mx-8'>등록 사항에서 이상이 없으면 심사 후에 등록됩니다</p>
                        </div>
                    </div>
                </div>
                </div>
      <label className="mb-5 pt-10 px-10 block text-xl font-semibold text-[#07074D]">
        사진 등록
      </label>
      <div className="mb-8">
        {preview && <img src={preview} alt="preview" />}

        <label className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
          <div>
            <input
              type="file"
              name="file"
              id="file"
              accept="image/*"
              onChange={handleImgChange}
            />
          </div>
        </label>
      </div>
      <div className="py-10">
        <label class="mb-5 pt-10 px-10 block text-xl font-semibold text-[#07074D]">
          주소 등록
        </label>
      </div>
      <Postcode />
      <label className="mb-5 pt-10 px-10 block text-xl font-semibold text-[#07074D]">
        등기부등본 등록
      </label>
      <div className="">
        <label className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
          <div>
            <input
              type="file"
              name="file"
              id="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </div>
        </label>
      </div>
      <div className="flex flex-col items-center">
      <button className="mt-20 mx-4 flex justify-center items-center text-white bg-indigo-500 
        border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">매물 등록하기</button>
      </div>
    </div>
  );
}
