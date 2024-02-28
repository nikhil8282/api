const mongoose = require("mongoose");

const JobsRequirementSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            // required: true,
            trim: true,
            minlength: 2,
        },
        experience: {
            type: String,
            required: true,
            
        },
        date_of_joining:{
            type:String
        },
        no_of_positions:{
            type:String
        },
        budget: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default:"Pending"            
        },

    },

    { timestamps: true }
);

// Creating model
module.exports= mongoose.model("JobsRequirement", JobsRequirementSchema);