const PostModel = require('../models/PostModel');

const getAllPosts = async () => {
    return await PostModel.find();
}

const getPostById = async (id) => {
    PostModel.findById(id);
}

const createPost = async (post) => {
    post = new PostModel(post);
    await post.save();
    return post;
}

const updatePost = async (id, post) => {
    await PostModel.findByIdAndUpdate(id, post);
    return await PostModel.findById(id);

}

const deletePost = async (id) => {
    PostModel.findByIdAndDelete(id);
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}
