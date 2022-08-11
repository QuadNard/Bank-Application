"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./utils/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/projects', require("./routes/projectRoutes"));
app.listen(config_1.PORT, () => console.log(`server started on port ${config_1.PORT}`));
