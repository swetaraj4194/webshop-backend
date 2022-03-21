"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Sweta",
        email: "s@s.com",
        password: "rte567ki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alina",
        email: "a@a.com",
        password: "rte5rhgi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
