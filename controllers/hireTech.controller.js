const candidate = require("../models/candidate");
const HireTech = require("../models/hireTech");
// const ResourceManagement = require("../models/resourceManagement");

const getJobsBySkill = async (req, res) => {
  const { id: _id } = req.body;
  // console.log(`${weekStartDate}  ${weekEndDate}  ${taskDate}`);
  try {
    let data = await candidate.findOne({ _id }, { skills: 1, _id: 0 });
    let skills = data.skills;
    // skills=skills[0].skills;
    console.log(skills);
    let result = await HireTech.find({
      selectedSkills: { $elemMatch: { $in: skills } },
    }).limit(5);
    // console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  // console.log(id,status);
  try {
    if (!id || !status) return res.status(400).json("Bad request");

    let result = await HireTech.updateOne(
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

const addCandidates = async (req, res) => {
  const { jobId, candidateId } = req.body;
  if (!jobId || !candidateId) return res.status(400).json("Bad request");
  try {
    const result = await HireTech.updateOne(
      { _id: jobId },
      {
        $addToSet: {
          "appliedCandidates": { "_id": candidateId },
        },
      }
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json(err.message);
  }
};
const getJobs = async (req, res) => {
  const { id } = req.params;

  try {
    let result = await HireTech.find({ _id: id });
    // console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }

  return res.status(400).json(err.message);
};

const setJobData = async (req, res) => {
  const { jobTitle, noPositions, experience, selectedSkills } = req.body;
  try {
    if (!jobTitle || !noPositions || !experience || !selectedSkills)
      throw new Error("All fields required");
    let result = await HireTech.create({
      jobTitle,
      noPositions,
      experience,
      selectedSkills,
    });
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const updateTechStatus = async (req, res) => {
  const { id } = req.params;
  const { status, date } = req.body;
  // console.log(`${weekStartDate}  ${weekEndDate}  ${taskDate}`);
  console.log(id, status, date);
  try {
    if (!id || !status || !date) return res.status(400).json("Bad request");

    let result = await HireTech.updateOne(
      { _id: id },
      {
        $addToSet: {
          techStatus: { status: status, date: date },
        },
      }
    );
    console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  getJobsBySkill,
  updateTechStatus,
  setJobData,
  getJobs,
  addCandidates,
  updateStatus,
};
