"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const config_1 = require("./utils/config");
(0, db_1.connectDB)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/projects', require("./routes/projectRoutes"));
app.use(errorMiddleware_1.errorHandler);
app.listen(config_1.PORT, () => console.log(`server started on port ${config_1.PORT}`));
