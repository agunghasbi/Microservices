'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      profession: 'Admin Micro',
      avatar: '1.jpg',
      role: 'admin',
      email: "juara@gmail.com",
      password: await bcrypt.hash('rahasia1234', 10),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'John Doe',
      profession: 'FE Dev',
      avatar: '1.jpg',
      role: 'student',
      email: "ad@gmail.com",
      password: await bcrypt.hash('rahasia1234', 10),
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
