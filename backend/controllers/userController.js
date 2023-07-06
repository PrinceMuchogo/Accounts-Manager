import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// login user
// route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });


    if (user && (await user.matchPassword(password))) {

        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

});

// Register new user
// route POST /api/users/signup
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName,email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    };

    const user = await User.create({
        firstName,
        lastName,
        email,
        password
    });

    if (user) {

        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

});


// Get user profile
// route GET /api/users/profile
// access  Private
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user) {
        res.status(401);
        throw new Error('User not found')
    }

    const userProfile = {
        firstname: user.firstname,
        lastName: user.lastName,
        password: user.password,
        email: user.email
    }

    res.status(201).json({
        userProfile
    })


});

// Update user profile
// route PUT /api/users/profile
// access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;


        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            //_id: updatedUser._id,
            firstname: updatedUser.firstName,
            surname: updatedUser.lastName,
            email: updatedUser.email,
            password: updatedUser.password
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});


export {
    loginUser,
    registerUser,
    getUserProfile,
    updateUserProfile
};