import React from "react";

function ContractAgree() {
  return (
    <div>
      <div className="flex ">
        <div className="mx-auto w-full max-w-lg rounded-lg px-10 py-8 shadow-xl">
          <div className="mx-auto space-y-6">
            <p className="ml-10">설명문 상호 동의 하에 진행됩니다.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full rounded-lg px-10 py-8 ">
        <div className="mt-5 ml-10">
          <p>계약자 정보</p>
        </div>
        <div className="mt-5 ml-10">
          <p>임대주택 유형</p>
        </div>
        <div className="mt-5 ml-10">
          <p>계약기간</p>
        </div>
        <div className="mt-5 ml-10">
          <p>임대료</p>
        </div>
        <div className="mt-5 ml-10">
          <p>개인정보 동의서</p>
        </div>
        <div className="mt-5 ml-10">
          <p>임대인 특약 조항</p>
        </div>
        <div className="mt-5 ml-10">
          <p>임차인 특약 조항</p>
        </div>
        <div className="mt-5 ml-10">
          <p>주의사항</p>
        </div>
      </div>
      <a
        target="_blank"
        className="mx-auto block w-1/4 translate-x-full translate-y-1/2 rounded-md bg-black px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none"
      >
        계약합니다
      </a>
    </div>
  );
}

export default ContractAgree;
