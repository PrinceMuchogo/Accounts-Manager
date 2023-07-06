import express from 'express';
const router = express.Router();
import {
    loginUser,
    registerUser,
    getUserProfile,
    updateUserProfile } from '../controllers/userController.js';


router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router;