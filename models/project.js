const mongoose = require("mongoose");
const Validator =require("validator");

const ProjectRequirementSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            // required: true,
            trim: true,
            minlength: 2,
        },
        email: {
            type: String,
            // required: true,
            unique: true,
            trim: true,
            validate(value) {
                if (!Validator.isEmail(value)) {
                    throw new Error("Enter A Valid Email")
                }
            }
        },
        headline: {
            type: String,
            required: true,
        },
        projectDescription: {
            type: String,
            required: true,
            //  maxLength:50,
        },
        budget: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default:"Pending"            
        },
        date: {
            type: Date,
        },
        time: {
            type: String,
        }

    },

    { timestamps: true }
);

// Creating model
module.exports= mongoose.model("ProjectRequirement", ProjectRequirementSchema);