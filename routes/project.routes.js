const express = require("express");
const {getAllProjectRequirement,setProjectRequirement,updateProjectRequirementStatus}=require("../controllers/projects.controller");
const router=express.Router();
router.get("/",getAllProjectRequirement);
router.post("/",setProjectRequirement);
router.put("/status/update/:id",updateProjectRequirementStatus);
module.exports= router;