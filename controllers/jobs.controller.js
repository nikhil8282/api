const JobsRequirement = require("../models/jobs");

const setJobsRequirement = async (req, res) => {
  const { name, experience, date_of_joining, no_of_positions, budget } =
    req.body;
  try {
    if (!name || !experience || !date_of_joining || !no_of_positions || !budget)
      throw new Error("All fields required");
    let result = await JobsRequirement.create({
      name,
      experience,
      date_of_joining,
      no_of_positions,
      budget,
    });
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const getAllJobsRequirement = async (req, res) => {
  try {
    let result = await JobsRequirement.find();

    return res.json(result);
  } catch (err) {
    return res.json(err.message);
  }
};
const updateJobsRequirementStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  // console.log(id,status);
  try {
    if (!id || !status) return res.status(400).json("Bad request");

    let result = await JobsRequirement.updateOne(
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
  getAllJobsRequirement,
  setJobsRequirement,
  updateJobsRequirementStatus,
};
