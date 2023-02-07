'use strict';

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("reports", [
      {
        id: 1,
        reason : "사진과 내용이 다름",
        reportId : 1, // 매물Id
        reporterId : 5, //신고자 id
        createdAt,
        updatedAt
      },
      {
        id:2,
        reason : "방문했지만 거짓 매물",
        reportId : 1, // 매물Id
        reporterId : 3, //신고자 id
        createdAt,
        updatedAt
      },

    ])
  },
  down: async (queryInterface, Sequelize) => {
    await  queryInterface.bulkDelete('reports', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}