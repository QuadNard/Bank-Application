"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@desc Get all projects 
//@route GET /api/projects
//@access Public
const getProjects = (req, res) => {
    res.status(200).json({ message: 'Get All Projects' });
};
//@desc Create a new project
//@route POST /api/projects
//@access Private
const createProject = (req, res) => {
    res.json({ message: 'Create a Project' });
};
const getProject = (req, res) => {
    res.json({ message: `Get Project ${req.params.id}` });
};
const deleteProject = (req, res) => {
    res.json({ message: `Delete Projects ${req.params.id}` });
};
const updateProject = (req, res) => {
    res.json({ message: `Update Project ${req.params.id}` });
};
module.exports = {
    getProjects,
    createProject,
    getProject,
    deleteProject,
    updateProject,
};
