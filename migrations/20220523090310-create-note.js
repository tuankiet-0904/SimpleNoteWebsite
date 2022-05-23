'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Notes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
            },
            image_url: {
                type: Sequelize.STRING,
            },
            category_ids: {
                type: Sequelize.JSON,
            },
            keyword: {
                type: Sequelize.STRING,
            },
            memo: {
                type: Sequelize.TEXT,
            },
            difficulty_level: {
                type: Sequelize.STRING,
            },
            popularity: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Notes')
    },
}
