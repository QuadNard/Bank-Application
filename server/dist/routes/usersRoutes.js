"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { loginUser, signupUser, } = require('../controllers/userControllers');
// login route 
router.route('/:id').post(loginUser);
// signup route
router.route('/id').post(signupUser);
module.exports = router;
