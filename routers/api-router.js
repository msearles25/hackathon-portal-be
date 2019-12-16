const router = require('express').Router()
const userRouter = require('./users-router')
const hackathonRouter = require('./hackathons-router')

router.use('/users', userRouter);
router.use('/hackathons', hackathonRouter);


module.exports = router;

