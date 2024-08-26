const express = require("express")
const dotenv = require("dotenv")

const app = express()
dotenv.config() // untuk menggunakan .env

const port = process.env.PORT

app.use(express.json()) // body parser untuk membaca request body dari FE

app.get("/", (req, res) => {
    res.send("API Mahasiswa v1")
})

const mahasiswaController = require("./mahasiswa/mahasiswa.controller")

app.use("/mahasiswa", mahasiswaController) // untuk menggunakan controller dan membuat endpoint /mahasiswa

app.listen(port, () => {
    console.log(`run di port ${port}`)
})