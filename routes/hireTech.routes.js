const express = require("express");
const { getJobsBySkill,updateTechStatus,setJobData, getJobs } = require("../controllers/hireTech.controller");
const router = express.Router();
router.get("/jobs/", getJobsBySkill);
router.get("/allJobs/", getJobs);
router.post("/jobs/",setJobData);
router.put("/jobs/update/techStatus/:id",updateTechStatus);
module.exports = router;
