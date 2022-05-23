# SimpleNoteWebsite

1. Start project:

-   npm install -g concurrently
-   npm install
-   cd website
-   npm install
-   cd ..
-   Chạy xampp -> mở phpMyAdmin -> Tạo 1 database trống tên simple_note_db
-   npx sequelize-cli db:migrate
-   npx sequelize-cli db:seed:all
-   npm start

2. Setup sequelize:

-   npm install sequelize
-   npm install --save sequelize-cli
-   npx sequelize-cli init
-   Nếu có lỗi, tạo một file config tên .sequelizerc trong thư mục gốc với nội dung:
    const path = require('path');

    module.exports = {
    'config': path.resolve('./config', 'config.json'),
    'migrations-path': path.resolve('./', 'migrations'),
    'models-path': path.resolve('./', 'models'),
    'seeders-path': path.resolve('./', 'seeders')
    }

-   Chạy lệnh: node_modules/.bin/sequelize init

3. Tạo model với sequelize:

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

=> Kết quả: 2 file model và migration được tạo

3. Migrations:

-   Chạy migrations:

npx sequelize-cli db:migrate

-   Gỡ migrations:

npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

4. Tạo seeders:

-   Tạo seeder:

npx sequelize-cli seed:generate --name demo-user

-   Chạy seeder:

npx sequelize-cli db:seed:all/seeder's name

-   Undo seeder:

npx sequelize-cli db:seed:undo
npx sequelize-cli db:seed:undo:all/ --seed name-of-seed-as-in-data

5. Reset auto increment in MySQL:

ALTER TABLE table_name AUTO_INCREMENT = value;

6. Prettier format code:

npm run format-code
