# Belajar API Express JS

- Create Project/Folder
- run npm init -y pada terminal project
- tambahkan dependencies/library menggunakan terminal
- npm i express
- npm i nodemon untuk hot reload
- npm i dotenv untuk menggunakan file .env
- npm i prisma untuk ORM
- buat file .env dan masukan DATABASE_URL dan PORT
- buat file .gitignore dan masukan node_modules/ dan .env
- buat folder/package src
- buat folder/package db di dalam package src
- buat file index.js di dalam package src sebagai entry point dari aplikasi
- buat script baru di dalam package.json dengan nama api-service yang berisi nodemon src/index.js
- run npm run api-service untuk menjalankan project/aplikasi
- run npx prisma init
- ubah bawaan provide prisma dari postgresql ke mysql pada file schema.prisma
- run npx prisma db pull untuk mengambil table yang sudah ada pada databse
- run npx prisma generate
- buat folder di dalam package src berdasarkan fitur untuk menerapkan layered architecture
- buat file fitur.repository.js
- buat file fitur.service.js
- buat file fitur.controller.js

## Hashing Password
- npm i bcrypt
- buat database user
- column password minimal panjang 60 (saran 100)
- gunakan bcrypt.hash(password, 10)
