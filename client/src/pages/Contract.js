import React from "react";

function Contract() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="mx-auto w-full max-w-lg rounded-lg px-10 py-8 shadow-xl">
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
            className="block w-1/4 transform rounded-md bg-black px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Confirm
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contract;
