const express = require("express");
const {getAllJobsRequirement,setJobsRequirement,updateJobsRequirementStatus}=require("../controllers/jobs.controller");
const router=express.Router();
router.get("/",getAllJobsRequirement);
router.post("/",setJobsRequirement);
router.put("/status/update/:id",updateJobsRequirementStatus);
module.exports= router;