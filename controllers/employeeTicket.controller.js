const EmployeeTickets = require("../models/employeeTickets");

const getEmployeeTicket = async (req, res) => {
  const { id } = req.params;
  let result = await EmployeeTickets.findOne({ _id: id });
  return res.json(result);
};
const setEmployeeTicket = async (req, res) => {
  const { date,issue, status } = req.body;
  try {
    if ( !issue ||!date|| !status)
      throw new Error("All fields required");
    let result = await EmployeeTickets.create({
      issue,
      date,
      status,
    });
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  getEmployeeTicket,
  setEmployeeTicket,
  
};
