const express = require('express');
const router = express.Router();

const PostBLL = require('../models/PostBLL');

router.get('/', async (req, res) => {
    const posts = await PostBLL.getAllPosts();
    res.json(posts);
})

router.get('/:id', async (req, res) => {
    const post = await PostBLL.getPostById(req.params.id);
    res.json(post);
})

router.post('/', async (req, res) => {
    const post = await PostBLL.createPost(req.body);
    res.json(post);
})

router.put('/:id', async (req, res) => {
    const post = await PostBLL.updatePost(req.params.id, req.body);
    res.json(post);
})

router.delete('/:id', async (req, res) => {
    const post = await PostBLL.deletePost(req.params.id);
    res.json(post);
})

module.exports = router;