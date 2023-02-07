'use strict';

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("estates", [
      {
        id : 1,
        types : "월세",
        deposit : "500000000",
        rental : "500000",
        description : "이 지역 최고의 집",
        owner : 1,
        tokenId:"0x9b7b5fB4234b3C3cC72e1c768Eda432c2667f256",
        createdAt,
        updatedAt
        // contractAddress : "0x9b7b5fB4234b3C3cC72e1c768Eda432c2667f256"
        
      },
      {
        id :2,
        types : "전세",
        deposit : "1000000000",
        description : "엘리베이터 있음, 남향",
        owner : 2,
        tokenId : "0x8c6b5fB4234b3C3cC72e1c768Eda432c2667f512",
        createdAt,
        updatedAt
        // contractAddress : "0x8c6b5fB4234b3C3cC72e1c768Eda432c2667f512"
      },
      {
        id : 3,
        types : "월세",
        deposit : "10000000",
        rental : "450000",
        description : "도배,장판 교체해 깔끔합니다. 현재 공실로 즉시 입주 가능합니다.",
        owner : 3,
        tokenId: "0x7d5c5fB4234b3C3cC72e1c768Eda432c26671024",
        createdAt,
        updatedAt
        // contractAddress : "0x7d5c5fB4234b3C3cC72e1c768Eda432c26671024"
      },
      {
        id :4,
        types : "월세",
        deposit : "1000000",
        rental : "1000000",
        description : "시세대비 가격조건이 좋습니다",
        owner : 4,
        tokenId : "0x6e4b5fB4234b3C3cC72e1c768Eda432c26672048",
        createdAt,
        updatedAt
        // contractAddress : "0x6e4b5fB4234b3C3cC72e1c768Eda432c26672048"
      },
      {
        id: 5,
        types : "월세",
        deposit : "500000000",
        rental : "500000",
        description : "현재 세입자 거주중이여서 3/7 이후 입주가능합니다",
        owner :5,
        tokenId :"0x5f3b5fB4234b3C3cC72e1c768Eda432c26674096",
        createdAt,
        updatedAt
        // contractAddress : "0x5f3b5fB4234b3C3cC72e1c768Eda432c26674096"
      },
      {
        id : 6,
        types : "월세",
        deposit : "1000000000",
        rental : "1000000",
        description : "이사 바로가능, 남향, 풀옵션",
        owner : 1,
        tokenId:"0x050601244234b3C3cC72e1c768Eda432c2667f128",
        createdAt,
        updatedAt
        // contractAddress : "0x9b7b5fB4234b3C3cC72e1c768Eda432c2667f256"
        
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