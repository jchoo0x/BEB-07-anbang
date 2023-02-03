import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const Postcode = (props) => {
  const [addressValue, setAddressValue] = useState("");
  const [zipCodeValue, setZipCodeValue] = useState("");
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let zipCode = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddressValue(fullAddress);
    setZipCodeValue(zipCode);
  };

  return (
    <form>
      <input
        className="mx-auto flex items-center justify-between text-black border border-blue-700 bg-white max-w-sm font-mono text-sm py-3 px-4 w-[500px] rounded-md"
        value={addressValue}
        onChange={addressValue}
      />
      <br />
      <input
        className="mx-auto flex items-center justify-between text-black border border-blue-700 bg-white max-w-sm font-mono text-sm py-3 px-4 w-[500px] rounded-md"
        value={zipCodeValue}
        onchange={zipCodeValue}
      />
      <DaumPostcodeEmbed onComplete={handleComplete} {...props} />
    </form>
  );
};

export default Postcode;
