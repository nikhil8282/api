const mongoose = require("mongoose");
const ticketsSchema = mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    created_on: {
        type: String,
        required: true,
      },

    issue: {
        type: String,
        required: true,
      },
      
      last_update: {
        type: String,
        
      },
    status: {
        type: String,
        required: true,
      },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Tickets", ticketsSchema);
