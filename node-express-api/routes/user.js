const express = require('express')
const router = express.Router();
const {getAllUsers, createUser, login, updatingUser, deleting, getSingleUser, userStats} = require('../controllers/user')
const {verifyAuth, verifyAuthAdmin} = require('../middleware/verify');

router.get('/auth/user', getAllUsers)

// router.post('/user', )

router.post('/register', createUser)
router.post('/login', login)
// router.put('/auth/login/:id', verifyAuth, updatingUser)
router.route('/auth/login/:id').patch(verifyAuth, updatingUser)
router.route('/auth/user/:id').get(verifyAuthAdmin, getSingleUser).delete(verifyAuth, deleting)
router.get('/auth/stat', verifyAuthAdmin, userStats)

module.exports = router