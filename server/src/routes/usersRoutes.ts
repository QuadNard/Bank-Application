import express from 'express';

const router = express.Router()

const {
    loginUser,
    signupUser,
} = require('../controllers/userControllers')

// login route 
router.route('/:id').post(loginUser)


// signup route
router.route('/id').post(signupUser)



module.exports = router;