"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = exports.NODE_ENV = exports.PORT = void 0;
require('dotenv').config();
exports.PORT = process.env.PORT || 5000;
exports.NODE_ENV = process.env.NODE_ENV || 'development';
exports.MONGO_URI = process.env.MONGO_URI || null;
