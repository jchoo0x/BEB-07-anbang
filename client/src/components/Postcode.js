import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const Postcode = (props) => {
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

    console.log(fullAddress);
    console.log(zipCode);
  };

  return <DaumPostcodeEmbed onComplete={handleComplete} {...props} />;
};

export default Postcode;
