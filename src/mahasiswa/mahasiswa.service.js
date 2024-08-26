// layer untuk handle business logic

const { findMahasiswa, findMahasiswaByNim, createMahasiswa, deleteMahasiswa, editMahasiswa } = require("./mahasiswa.repository");

const getAllMahasiswa = async () => {
    const mahasiswa = await findMahasiswa()
    return mahasiswa
};

const getMahasiswaByNim = async (nim) => {
    const mahasiswa = await findMahasiswaByNim(nim)

    if (!mahasiswa) {
        throw Error("Mahasiswa not found")
    }

    return mahasiswa
}

const addMahasiswa = async (mahasiswaData) => {
    const mahasiswa = await createMahasiswa(mahasiswaData)
    
    return mahasiswa
} 

const deleteMahasiswaByNim = async (nim) => {
    await getMahasiswaByNim(nim)
    await deleteMahasiswa(nim)
}

const editMahasiswaByNim = async (nim, mahasiswaData) => {
    await getMahasiswaByNim(nim)
    const mahasiswa = await editMahasiswa(nim, mahasiswaData)

    return mahasiswa
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByNim,
    addMahasiswa,
    deleteMahasiswaByNim,
    editMahasiswaByNim
}