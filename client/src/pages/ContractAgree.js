import React from "react";

function ContractAgree() {
  return (
    <div className="flex min-h-screen  justify-center ">
      <div className="mx-auto w-full  rounded-lg px-10 py-8 shadow-xl">
        <div className="mx-auto space-y-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <div className="flex w-full justify-center"></div>
          <a
            target="_blank"
            className="block w-1/4 translate-x-full rounded-md bg-black px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none"
          >
            계약합니다
          </a>
        </div>
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
    </div>
  );
}

export default ContractAgree;
