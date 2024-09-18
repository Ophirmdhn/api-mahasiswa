// layer untuk handle business logic

const { findUser, createUser } = require("./user.repository");

const getAllUser = async () => {
    const user = await findUser()
    return user
};

// const getMahasiswaByNim = async (nim) => {
//     const mahasiswa = await findMahasiswaByNim(nim)

//     if (!mahasiswa) {
//         throw Error("Mahasiswa not found")
//     }

//     return mahasiswa
// }

const addUser = async (userData) => {
    const user = await createUser(userData)
    
    return user
} 

module.exports = {
    getAllUser,
    addUser
}