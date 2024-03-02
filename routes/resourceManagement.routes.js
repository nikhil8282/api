const express = require("express");
const {
  updateTaskdes}=require("../controllers/resourceManagement.contoller");
const router=express.Router();
router.put("/tasks/tasksDescription",updateTaskdes);
module.exports= router;