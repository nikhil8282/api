const hireTech = require("../models/hireTech");
// const ResourceManagement = require("../models/resourceManagement");

const getJobsBySkill = async (req, res) => {
  const { skill } = req.body;
  // console.log(`${weekStartDate}  ${weekEndDate}  ${taskDate}`);
  try {
    if (!skill) return res.status(400).json("Bad request");

    let result = await hireTech.find({

      selectedSkills: {$all:skill}
    });
    // console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }

  return res.status(400).json(err.message);
};
module.exports = {
  getJobsBySkill,
};
