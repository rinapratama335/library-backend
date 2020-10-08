// "use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        fullName: "spiderman",
        email: "spiderman@gmail.com",
        password: "lovespiderman",
        phone: 6283896833123,
        address: "di mana aja boleh lah yak",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        fullName: "Haris",
        email: "harisman@gmail.com",
        password: "harisganteng",
        phone: 6283896822122,
        address: "Deket rumah surti jelaskan yaakk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        fullName: "surti",
        email: "surti@gmail.com",
        password: "surticantik",
        phone: 6283896833123,
        address: "deket rumah haris ganteng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
