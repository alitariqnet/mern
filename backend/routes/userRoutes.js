const express = require('express')
const router = express.Router()
const {getUser, createUser, welcome} = require('../controllers/userController')

router.get('/:id',getUser);

router.post('/create',createUser);

router.get('/',welcome);

module.exports = router;