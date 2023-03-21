const UserModel = require('../models/UserModel');


const getAllUsers = async () => {
    return await UserModel.find();
}

const getUserById = async (id) => {
    return await UserModel.findById(id);

}

const createUser = async (user) => {
    user = new UserModel(user);
    await user.save();
    return user;


}

const updateUser = async (id, user) => {
    await UserModel.findByIdAndUpdate(id, user)
    return await UserModel.findById(id);
}

const deleteUser = async (id) => {
    UserModel.findByIdAndDelete(id);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
