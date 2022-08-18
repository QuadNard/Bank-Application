"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// login user
const loginUser = (req, res) => {
    res.status(200).json({ message: `login user ${req.params.id}` });
};
// signup user 
const signupUser = (req, res) => {
    res.status(200).json({ message: `signup user ${req.params.id}` });
};
module.exports = {
    loginUser,
    signupUser,
};
