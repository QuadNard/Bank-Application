"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const routes = express.Router();
routes.get('/', (req, res) => {
    res.json({ message: 'Get All Projects' });
});
routes.post('/', (req, res) => {
    res.json({ message: 'Create a Project' });
});
routes.get('/:id', (req, res) => {
    res.json({ message: `Get Project ${req.params.id}` });
});
routes.put('/:id', (req, res) => {
    res.json({ message: `Update Project ${req.params.id} ` });
});
routes.delete('/:id', (req, res) => {
    res.json({ message: `Delete Project ${req.params.id}` });
});
module.exports = routes;
