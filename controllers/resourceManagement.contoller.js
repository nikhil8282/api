const ResourceManagement = require("../models/resourceManagement");

const updateTaskdes = async (req, res) => {
  const { weekStartDate, weekEndDate, taskDate } = req.query;
  const { id, taskDescription } = req.body;
    console.log(`${weekStartDate}  ${weekEndDate}  ${taskDate}`);
  try {
    if (!id || !taskDescription) return res.status(400).json("Bad request");

    let result = await ResourceManagement.updateOne(
      { _id: id },
      {
        $set: {
          "weeklyStatus.$[ws1].tasks.$[t1].taskDescription": taskDescription
        },
      },
      {
        arrayFilters: [
          {
            "ws1.weekStartDate": weekStartDate,
            "ws1.weekEndDate": weekEndDate,
          },
          
          {
            "t1.date": taskDate,
          },
        ],
  
      }
    );
    console.log(result);
    return res.json("status update successfully!");
  } catch (err) {
    return res.status(400).json(err.message);
  }

  return res.status(400).json(err.message);
};
module.exports = {
  updateTaskdes,
};
