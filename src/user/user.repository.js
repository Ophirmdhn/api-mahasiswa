// layer untuk berkomunikasi dengan database
// bisa menggunakan raw query

const db = require("../db")
const bcrypt = require("bcrypt")

const findUser = async () => {
    const user = await db.tb_user.findMany()
    
    return user
};

// const findMahasiswaByNim = async (nim) => {
//     const mahasiswa = await db.tb_mahasiswa.findUnique({
//         where: {
//             nim_mahasiswa: nim,
//         },
//     });

//     return mahasiswa;
// };

// menggunakan raw query sql
// const findMahasiswaByNim = async (nim) => {
//     const mahasiswa = await db.$queryRaw`SELECT * FROM tb_mahasiswa WHERE nim_mahasiswa = ${nim}`
//     return mahasiswa
// }

const createUser = async (userData) => {
    // cek email yang sudah ada
    const existingUser = await db.tb_user.findUnique({
        where: {
            email: userData.email,
        },
    });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)

    const user = await db.tb_user.create({
        data: {
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
        },
    });
    
    return user;
}

module.exports = {
    findUser,
    createUser
}