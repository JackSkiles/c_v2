'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Directories', [
      {
        firstName: 'Bob',
        lastName: 'Billy',
        email: 'billyBob@gmail.com',
        phone: '423-619-5332',
        address: '954 tremont drive',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Directory', null, {});

  }
};
