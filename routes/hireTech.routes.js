const express = require("express");
const { getJobsBySkill } = require("../controllers/hireTech.controller");
const router = express.Router();
router.get("/jobs/", getJobsBySkill);
// router.put("/tasks/tasksDescription",updateTaskdes);
module.exports = router;
