const express = require("express");
const { getJobsBySkill,updateTechStatus,setJobData, getJobs ,candidateApproval,applyCandidate,updateStatus,updateCandidate,undoTechStatus} = require("../controllers/hireTech.controller");
const router = express.Router();
router.get("/jobs/", getJobsBySkill);
router.get("/allJobs/", getJobs);
router.post("/jobs/",setJobData);
router.post("/apply/:_id",applyCandidate);
router.post("/updateCandidate/",updateCandidate);
router.put("/jobs/update/status/:id",updateStatus);
router.put("/jobs/update/techStatus/:id",updateTechStatus);
router.post("/jobs/candidateApproval/:_id",candidateApproval)
router.delete("/jobs/update/techStatus/:_id",undoTechStatus);
module.exports = router;
