const ProjectRequirement = require("../models/project");


const setProjectRequirement = async (req, res) => {
  const { name,email,headline,projectDescription,budget} = req.body;
  try {
    if (!name || !email || !headline || !projectDescription || !budget)
      throw new Error("All fields required");
    let result = await ProjectRequirement.create({
      name,
      email,
      headline,
      projectDescription,
      budget
    });
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const getAllProjectRequirement = async (req, res) => {
  try {
    let result = await ProjectRequirement.find();

    return res.json(result);
  } catch (err) {
    return res.json(err.message);
  }
};
const updateProjectRequirementStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
    // console.log(id,status);
  try {
    if (!id || !status) return res.status(400).json("Bad request");

    let result = await ProjectRequirement.updateOne(
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
  getAllProjectRequirement,
  setProjectRequirement,
  updateProjectRequirementStatus
};
