const express = require("express");
const { getJobsBySkill,updateTechStatus,setJobData, getJobs ,addCandidates,updateStatus} = require("../controllers/hireTech.controller");
const router = express.Router();
router.get("/jobs/", getJobsBySkill);
router.get("/allJobs/:id", getJobs);
router.post("/jobs/",setJobData);
router.post("/addCandidates/",addCandidates);
router.put("/jobs/update/status/:id",updateStatus);
router.put("/jobs/update/techStatus/:id",updateTechStatus);
module.exports = router;
