const express = require("express");
const {
  setAppliedJobs,
  getAllAppliedJobs,
  updateAppliedJobsStatus,
} = require("../controllers/appliedJobs.controller");
const router = express.Router();
router.get("/", getAllAppliedJobs);
router.post("/", setAppliedJobs);
router.put("/status/update/:id", updateAppliedJobsStatus);
module.exports = router;
