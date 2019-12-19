const userDb = require('../models/users-model');
const userHackathonDb = require('../models/user_hackathons-model')
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const users = await userDb.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userDb.findById(id)
        user.hackathons = await userHackathonDb.findHackathonByUserId(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/u/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const user = await userDb.findByUsername(username)
        const user_id = user.id
        user.hackathons = await userHackathonDb.findHackathonByUserId(user_id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body
    try {
        const user = await userDb.findById(id)
        if (user) {
            const updated = await userDb.updateUser(id, changes)
            res.status(200).json(updated)
        } else {
            res.status(401).json({ error: `The specified user id does not exist` })
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;