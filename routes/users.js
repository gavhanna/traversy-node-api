const express = require('express');
const {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/users');

const User = require('../models/User');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');

router.use(protect);
router.use(authorise('admin'));

router
    .route('/')
    .get(advancedResults(User), getUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
