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
    if (!req.body.title) {
        res.status(400);
        throw new Error('Title is required');
    }
    res.status(201).json({ message: 'Create a Project' });
};
//@desc Get a project by id 
//@route GET /api/projects/:id
//@access Public 
const getProject = (req, res) => {
    res.json({ message: `Get Project ${req.params.id}` });
};
//@desc Delete a project by id 
//@route DELETE /api/projects/:id 
//@access Private 
const deleteProject = (req, res) => {
    res.json({ message: `Delete Projects ${req.params.id}` });
};
//@desc Update a project by id 
//@route PUT /api/projects/:id
//@access Private
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
