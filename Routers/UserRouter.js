const express = require('express');
const router = express.Router();

const UserBLL = require('../models/UserBLL');

router.get('/', async (req, res) => {
    const users = await UserBLL.getAllUsers();
    res.json(users);
})

router.get('/:id', async (req, res) => {
    const user = await UserBLL.getUserById(req.params.id);
    res.json(user);
})

router.post('/', async (req, res) => {
    const user = await UserBLL.createUser(req.body);
    res.json(user);
})

router.put('/:id', async (req, res) => {
    const user = await UserBLL.updateUser(req.params.id, req.body);
    res.json(user);
})

router.delete('/:id', async (req, res) => {
    const user = await UserBLL.deleteUser(req.params.id);
    res.json(user);
})

module.exports = router;
