const mongoose = require("mongoose");
const EmployeeTicketsSchema = mongoose.Schema(
  {
    issue: {
      type: String,
      required: true,
    },
    date: {
        type: String,
        required: true,
      },
    status: {
        type: String,
        required: true,
      },

  },
  { timestamps: true }
);

module.exports = mongoose.model("EmployeeTickets", EmployeeTicketsSchema);
