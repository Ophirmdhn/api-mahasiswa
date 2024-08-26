// layer untuk berkomunikasi dengan database
// bisa menggunakan raw query

const db = require("../db")

const findMahasiswa = async () => {
    const mahasiswa = await db.tb_mahasiswa.findMany()
    
    return mahasiswa
};

const findMahasiswaByNim = async (nim) => {
    const mahasiswa = await db.tb_mahasiswa.findUnique({
        where: {
            nim_mahasiswa: nim,
        },
    });

    return mahasiswa;
};

// menggunakan raw query sql
// const findMahasiswaByNim = async (nim) => {
//     const mahasiswa = await db.$queryRaw`SELECT * FROM tb_mahasiswa WHERE nim_mahasiswa = ${nim}`
//     return mahasiswa
// }

const createMahasiswa = async (mahasiswaData) => {
    // cek nim yang sudah ada
    const existingMahasiswa = await db.tb_mahasiswa.findUnique({
        where: {
            nim_mahasiswa: mahasiswaData.nim_mahasiswa,
        },
    });

    if (existingMahasiswa) {
        throw new Error("NIM already exists");
    }

    const mahasiswa = await db.tb_mahasiswa.create({
        data: {
            nama_mahasiswa: mahasiswaData.nama_mahasiswa,
            nim_mahasiswa: mahasiswaData.nim_mahasiswa,
            jurusan: mahasiswaData.jurusan,
        },
    });
    
    return mahasiswa;
}

const deleteMahasiswa = async (nim) => {
    await db.tb_mahasiswa.delete({
        where: {
            nim_mahasiswa: nim
        }
    })
}

const editMahasiswa = async (nim, mahasiswaData) => {
    const mahasiswa = await db.tb_mahasiswa.update({
        where: {
            nim_mahasiswa: nim
        },
        data: {
            nama_mahasiswa: mahasiswaData.nama_mahasiswa,
            nim_mahasiswa: mahasiswaData.nim_mahasiswa,
            jurusan: mahasiswaData.jurusan,
        },
    })

    return mahasiswa
}

module.exports = {
    findMahasiswa,
    findMahasiswaByNim,
    createMahasiswa,
    deleteMahasiswa,
    editMahasiswa
}