// layer untuk handle request, response dan validasi body

const express = require("express");
// const { getAllMahasiswa, getMahasiswaByNim, addMahasiswa, deleteMahasiswaByNim, editMahasiswaByNim } = require("./user.service");
const { getAllUser, addUser } = require("./user.service")


const router = express.Router();

router.get("/", async (req, res) => {
    const user = await getAllUser();
    res.send(user)
})

// router.get("/:nim", async (req, res) => {
//     try {
//         const nim = req.params.nim;
//         const mahasiswa = await getMahasiswaByNim(nim)
//         res.send(mahasiswa)
//     } catch (e) {
//         res.status(404).send(e.message)
//     }
// })

router.post("/register", async (req, res) => {
    try {
        const newUserData = req.body
        const user = await addUser(newUserData)
        res.status(201).send({
            message: "create data success",
            data: user
        })
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router // untuk menggunakan router