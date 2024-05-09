'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('videos', [{
      id: uuid.v4(),
      titulo: 'O senhor dos anéis',
      descricao: 'O senhor dos anéis', 
      url: 'https://teste.com.br',
      createdAt: new Date, 
      updatedAt: new Date
    }, {
      id: uuid.v4(),
      titulo: 'O senhor dos anéis 2',
      descricao: 'O senhor dos anéis 2', 
      url: 'https://teste.com.br',
      createdAt: new Date, 
      updatedAt: new Date
    }, {
      id: uuid.v4(),
      titulo: 'O senhor dos anéis 3',
      descricao: 'O senhor dos anéis 3', 
      url: 'https://teste.com.br',
      createdAt: new Date, 
      updatedAt: new Date
    }], {});
  };
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('video', null, {});    
  };
};