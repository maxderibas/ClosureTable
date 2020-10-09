'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    await queryInterface.bulkInsert('Trees', [
      {ancestorId: 1, descendantId: 1, level: 0, nearestAnc: 0, createdAt: date, updatedAt: date},
      {ancestorId: 1, descendantId: 2, level: 1, nearestAnc: 1, createdAt: date, updatedAt: date},
      {ancestorId: 1, descendantId: 3, level: 1, nearestAnc: 1, createdAt: date, updatedAt: date},
      {ancestorId: 1, descendantId: 4, level: 1, nearestAnc: 1, createdAt: date, updatedAt: date},
      {ancestorId: 1, descendantId: 5, level: 2, nearestAnc: 4, createdAt: date, updatedAt: date},
      {ancestorId: 1, descendantId: 6, level: 2, nearestAnc: 2, createdAt: date, updatedAt: date},
      {ancestorId: 1, descendantId: 7, level: 3, nearestAnc: 6, createdAt: date, updatedAt: date},
      {ancestorId: 2, descendantId: 2, level: 1, nearestAnc: 1, createdAt: date, updatedAt: date},
      {ancestorId: 2, descendantId: 6, level: 2, nearestAnc: 2, createdAt: date, updatedAt: date},
      {ancestorId: 2, descendantId: 7, level: 3, nearestAnc: 6, createdAt: date, updatedAt: date},
      {ancestorId: 3, descendantId: 3, level: 1, nearestAnc: 1, createdAt: date, updatedAt: date},
      {ancestorId: 4, descendantId: 4, level: 1, nearestAnc: 1, createdAt: date, updatedAt: date},
      {ancestorId: 4, descendantId: 5, level: 2, nearestAnc: 4, createdAt: date, updatedAt: date},
      {ancestorId: 5, descendantId: 5, level: 2, nearestAnc: 4, createdAt: date, updatedAt: date},
      {ancestorId: 6, descendantId: 6, level: 2, nearestAnc: 2, createdAt: date, updatedAt: date},
      {ancestorId: 6, descendantId: 7, level: 3, nearestAnc: 6, createdAt: date, updatedAt: date},
      {ancestorId: 7, descendantId: 7, level: 3, nearestAnc: 6, createdAt: date, updatedAt: date}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trees', null, {});
  }
};
