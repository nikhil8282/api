const AppliedJobs = require("../models/appliedJobs");

const setAppliedJobs = async (req, res) => {
  const { candidateId,jobId} =req.body;
  try {
    if (!candidateId || !jobId)
      throw new Error("All fields required");
    let result = await AppliedJobs.create({
      candidateId,
      jobId
    });
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const getAllAppliedJobs = async (req, res) => {
  try {
    let result = await AppliedJobs.find();

    return res.json(result);
  } catch (err) {
    return res.json(err.message);
  }
};
const updateAppliedJobsStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  // console.log(id,status);
  try {
    if (!id || !status) return res.status(400).json("Bad request");

    let result = await AppliedJobs.updateOne(
      { _id: id },
      {
        status: req.body.status,
      }
    );
    // console.log(result);
    return res.json("status update successfully!");
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
module.exports = {
  setAppliedJobs,
  getAllAppliedJobs,
  updateAppliedJobsStatus
};
