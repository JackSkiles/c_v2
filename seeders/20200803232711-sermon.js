'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Directories', [
      {
        elder: 'James Hindman',
        url: 'james.mp3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sermons', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
