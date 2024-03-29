const candidate = require("../models/candidate");
const HireTech = require("../models/hireTech");
// const ResourceManagement = require("../models/resourceManagement");


const updateCandidate = async (req, res) => {
  const { jobId, candidateId } = req.body;
  const {  status } = req.query;
  if (!jobId || !candidateId || !status)
    return res.status(400).json("Bad request");
  try {
    let result;
    if (status == "shortlist") {
      result = await HireTech.updateOne(
        { _id: jobId },
        {
          $addToSet: {
            shortListedCandidates: { _id:candidateId },
          },
        }
      );
    } else {
      result = await HireTech.updateOne(
        { _id: jobId },
        {
          $addToSet: {
            unShortListedCandidates: { _id: candidateId },
          },
        }
      );
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json(err.message);
  }
};

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

const applyCandidate = async (req, res) => {
  const { candidateId } = req.body;
  const { _id } = req.params;
  if (!_id || !candidateId) return res.status(400).json("Bad request");
  try {
    const result = await HireTech.updateOne(
      { _id},
      {
        $addToSet: {
          appliedCandidates: { _id: candidateId },
        },
      }
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json(err.message);
  }
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

const undoTechStatus= async(req,res)=>{
  const {_id}=req.params;
  const {statusId}=req.body;
  try {
    if (!_id || !statusId) return res.status(400).json("Bad request");
    
    let result = await HireTech.updateOne(
      { _id},
      {
        $pull: {
          techStatus: {_id:statusId},
        },
      }
    );
    console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }


}
const candidateApproval= async (req,res)=>{
  const { _id } = req.params;
  const { candidateId,status} = req.body;
  console.log(_id);
  try {
    if (!_id || !candidateId || !status) return res.status(400).json("Bad request");
    
    let result = await HireTech.updateOne(
      { _id},
      {
        $addToSet: {
          candidateApproval: { candidateId:candidateId,status: status},
        },
      }
    );
    console.log(result);
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  } 
}
module.exports = {
  getJobsBySkill,
  updateTechStatus,
  setJobData,
  getJobs,
  applyCandidate,
  updateStatus,
  updateCandidate,
  undoTechStatus,
  candidateApproval
};
