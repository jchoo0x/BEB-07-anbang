'use strict';

const { query } = require("express");

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        id : 1,
        email : "test01@gmail.com",
        password : "123qwe",
        nickname : "test01",
        name : "테스트01",
        phoneNumber : "010-1234-5678",
        walletAddress: "0xBFc8927221C677Dc4C9a21F8843405330420D58D",
        idNumber: "900101-1234567",
        createdAt,
        updatedAt
      },
      {
        id : 2,
        email : "test02@gmail.com",
        password : "234wer",
        nickname : "test02",
        name : "테스트02",
        phoneNumber : "010-2345-6789",
        walletAddress: "0xFb4eCE13AFE8A873B618Ef3FAcC1bEdA03241EDb",
        idNumber: "910102-2345678",
        createdAt,
        updatedAt
      
      },
      {
        id : 3,
        email : "test03@gmail.com",
        password : "345ert",
        nickname : "test03",
        name : "테스트03",
        phoneNumber : "010-3456-7890",
        walletAddress: "0x4Ab76cAE55F96978c042A647FBB14F66a6957F86",
        idNumber: "920103-1345678",
        createdAt,
        updatedAt
      },
      {
        id : 4,
        email : "test04@gmail.com",
        password : "456rty",
        nickname : "test04",
        name : "테스트04",
        phoneNumber : "010-4567-8901",
        walletAddress: "0xF997d70667FD7B7FD00607679c4620f9D8c89765",
        idNumber: "200101-3456789",
        createdAt,
        updatedAt
      },
      {
        id :5,
        email : "test05@gmail.com",
        password : "567tyu",
        nickname : "test05",
        name : "테스트05",
        phoneNumber : "010-5678-9012",
        walletAddress: "0xe070165f44a18Bc03bAe83e91CBE10cb1a32db67",
        idNumber: "210102-4567890",
        createdAt,
        updatedAt
      },

    ])
  },
  down : (queryInterface, Sequelize)=>{
    return queryInterface.bulkDelete('users', null, {});
  }
}