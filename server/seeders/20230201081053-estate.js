'use strict';

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("estates", [
      {
        types : "월세",
        deposit : "500000000",
        rental : "500000",
        description : "이 지역 최고의 집",
        owner : 1,
        createdAt,
        updatedAt
        // contractAddress : "0x9b7b5fB4234b3C3cC72e1c768Eda432c2667f256"
        
      },
      {
        types : "전세",
        deposit : "1000000000",
        description : "엘리베이터 있음, 남향",
        owner : 2,
        createdAt,
        updatedAt
        // contractAddress : "0x8c6b5fB4234b3C3cC72e1c768Eda432c2667f512"
      },
      {
        types : "월세",
        deposit : "10000000",
        rental : "450000",
        description : "도배,장판 교체해 깔끔합니다. 현재 공실로 즉시 입주 가능합니다.",
        owner : 3,
        createdAt,
        updatedAt
        // contractAddress : "0x7d5c5fB4234b3C3cC72e1c768Eda432c26671024"
      },
      {
        types : "월세",
        deposit : "1000000",
        rental : "1000000",
        description : "시세대비 가격조건이 좋습니다",
        owner : 4,
        createdAt,
        updatedAt
        // contractAddress : "0x6e4b5fB4234b3C3cC72e1c768Eda432c26672048"
      },
      {
        types : "월세",
        deposit : "500000000",
        rental : "500000",
        description : "현재 세입자 거주중이여서 3/7 이후 입주가능합니다",
        owner :5,
        createdAt,
        updatedAt
        // contractAddress : "0x5f3b5fB4234b3C3cC72e1c768Eda432c26674096"
      },

    ])
  },
  down: async (queryInterface, Sequelize) => {
    await  queryInterface.bulkDelete('estates', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}