const Tickets = require("../models/tickets");

const getTicket = async (req, res) => {
  const { id } = req.params;
  let result = await Tickets.findOne({ _id: id });
  return res.json(result);
};
const setTicket = async (req, res) => {
  const { company_name, created_on, issue, status } = req.body;
  try {
    if (!company_name || !created_on || !issue || !status)
      throw new Error("All fields required");
    let result = await Tickets.create({
      company_name,
      created_on,
      issue,
      status,
    });
    return res.json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const getAllTicket = async (req, res) => {
  try {
    let result = await Tickets.find();

    return res.json(result);
  } catch (err) {
    return res.json(err.message);
  }
};
const updateTicketStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
    console.log(id,status);
  try {
    if (!id || !status) return res.status(400).json("Bad request");

    let result = await Tickets.updateOne(
      { _id: id },
      {
        status: req.body.status,
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
  getTicket,
  getAllTicket,
  setTicket,
  updateTicketStatus,
};
