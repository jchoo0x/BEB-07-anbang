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
      <input value={addressValue} onChange={addressValue} />
      <br />
      <input value={zipCodeValue} onchange={zipCodeValue} />
      <DaumPostcodeEmbed onComplete={handleComplete} {...props} />
    </form>
  );
};

export default Postcode;
