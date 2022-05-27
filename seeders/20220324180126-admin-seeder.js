'use strict'

const hash_helper = require('../helpers/password-encrypter/hash_helper')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    name: 'Nguyễn Đặng Tuấn Kiệt',
                    email: 'tuankietnk2001@gmail.com',
                    password: hash_helper.hash('admin01'),
                    role: 2,
                    is_verified: true,
                },
                {
                    name: 'Nguyễn Đức Chinh',
                    email: 'ducchingbg01@gmail.com',
                    password: hash_helper.hash('admin02'),
                    role: 2,
                    is_verified: true,
                },
                {
                    name: 'Nguyễn Phạm Nhật Hào',
                    email: 'fa4820011@gmail.com',
                    password: hash_helper.hash('admin03'),
                    role: 2,
                    is_verified: true,
                },
            ],
            {},
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, { role: 2 })
    },
}
