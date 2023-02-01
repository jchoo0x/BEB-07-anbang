'use strict';

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("estates", [
      {
        types : "월세",
        deposit : "500000000",
        rental : "500000",
        conditions : "최상",
        contractAddress : "0x9b7b5fB4234b3C3cC72e1c768Eda432c2667f256"
      },
      {
        types : "전세",
        deposit : "1000000000",
        conditions : "상",
        contractAddress : "0x8c6b5fB4234b3C3cC72e1c768Eda432c2667f512"
      },
      {
        types : "월세",
        deposit : "10000000",
        rental : "450000",
        conditions : "중",
        contractAddress : "0x7d5c5fB4234b3C3cC72e1c768Eda432c26671024"
      },
      {
        types : "월세",
        deposit : "1000000",
        rental : "1000000",
        conditions : "하",
        contractAddress : "0x6e4b5fB4234b3C3cC72e1c768Eda432c26672048"
      },
      {
        types : "월세",
        deposit : "500000000",
        rental : "500000",
        conditions : "최상",
        contractAddress : "0x5f3b5fB4234b3C3cC72e1c768Eda432c26674096"
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