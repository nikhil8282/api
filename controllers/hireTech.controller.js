const HireTech = require("../models/hireTech");
// const ResourceManagement = require("../models/resourceManagement");

const getJobsBySkill = async (req, res) => {
  const { skill } = req.body;
  // console.log(`${weekStartDate}  ${weekEndDate}  ${taskDate}`);
  try {
    if (!skill) return res.status(400).json("Bad request");

    let result = await HireTech.find({
      selectedSkills: { $elemMatch: { $in: skill } },
    });
    // console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }

  return res.status(400).json(err.message);
};
const getJobs = async (req, res) => {

  try {

    let result = await HireTech.find();
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
  console.log(id,status,date);
  try {
    if (!id || !status || !date) return res.status(400).json("Bad request");

    let result = await HireTech.updateOne(
      { _id: id },
      {
        $addToSet: {
          techStatus: {"status":status,"date":date}
        }
      }
    );
    console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }

  return res.status(400).json(err.message);
};

module.exports = {
  getJobsBySkill,
  updateTechStatus,
  setJobData,
  getJobs
};
