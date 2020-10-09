'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    await queryInterface.bulkInsert('Comments', [
      {id: 1, content: "У меня просьба к автору сообщить первоисточники", createdAt: date, updatedAt: date},
      {id: 2, content: "Уверен, автор не сможет", createdAt: date, updatedAt: date},
      {id: 3, content: "Аналогичная просьба", createdAt: date, updatedAt: date},
      {id: 4, content: "Нет проблем, вечером дам ссылку", createdAt: date, updatedAt: date},
      {id: 5, content: "Тогда, отправте мне их по електронной почте", createdAt: date, updatedAt: date},
      {id: 6, content: "Откуда такая уверенность?", createdAt: date, updatedAt: date},
      {id: 7, content: "Стилистика заказных убийств мне хорошо известна", createdAt: date, updatedAt: date}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
