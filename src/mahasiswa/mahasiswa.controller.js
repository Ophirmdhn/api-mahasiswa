// layer untuk handle request, response dan validasi body

const express = require("express");
const { getAllMahasiswa, getMahasiswaByNim, addMahasiswa, deleteMahasiswaByNim, editMahasiswaByNim } = require("./mahasiswa.service");


const router = express.Router();

router.get("/", async (req, res) => {
    const mahasiswa = await getAllMahasiswa();
    res.send(mahasiswa)
})

router.get("/:nim", async (req, res) => {
    try {
        const nim = req.params.nim;
        const mahasiswa = await getMahasiswaByNim(nim)
        res.send(mahasiswa)
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const newMahasiswaData = req.body
        const mahasiswa = await addMahasiswa(newMahasiswaData)
        res.status(201).send({
            message: "create data success",
            data: mahasiswa
        })
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.delete("/:nim", async (req, res) => {
    try {
        const nimMahasiswa = req.params.nim
        await deleteMahasiswaByNim(nimMahasiswa)
        res.send("Mahasiswa deleted")
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.put("/:nim", async (req, res) => {
    const nim = req.params.nim;
    const mahasiswaData = req.body;
  
    if (
      !(
        mahasiswaData.nama_mahasiswa &&
        mahasiswaData.nim_mahasiswa &&
        mahasiswaData.jurusan
      )
    ) {
      return res.status(400).send("Some fields are missing")
    }
  
    const mahasiswa = await editMahasiswaByNim(nim, mahasiswaData)
  
    res.send({
        message: "Edit mahasiswa success",
        data: mahasiswa,
    })
})
  
  router.patch("/:nim", async (req, res) => {
    try {
      const nim = req.params.nim
      const mahasiswaData = req.body
  
      const mahasiswa = await editMahasiswaByNim(nim, mahasiswaData)
  
      res.send({
            message: "Edit mahasiswa success",
            data: mahasiswa,
      })
    } catch (e) {
      res.status(400).send(e.message);
    }
})

module.exports = router // untuk menggunakan router