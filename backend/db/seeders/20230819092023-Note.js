'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Notes',
      [
        {
          title: 'Первый блин комом?',
          content:
            'Будем надеяться, что нет, потому что по моей логике это должно сработать. До ужаса неудобная накладка на клавиатуру:)',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Notes', null, {});
  },
};
