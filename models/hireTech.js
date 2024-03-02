// import mongoose from "mongoose";
// import Validator from "validator";
const mongoose=require("mongoose");
const validator=require("validator");

const HireTechSchema = new mongoose.Schema(
    {
        jobTitle: {
            type: String,
            trim: true,
        },
        noPositions: {
            type: String,
            default: 1,
        },
        experience: {
            type: String,
        },
        selectedSkills: {
            type: [String],
        },
        joinDate: {
            type: Date,
            validate: {
                validator: (value) => Validator.isDate(value),
                message: 'Invalid date format',
            },
        },
        budget: {
            type: String,
            // required: true,
            // amount: {
            //     type: Number,
            //     required: true,
        },
        // currency: {
        //     type: String,
        //     required: true,
        // },
        // },
        description: {
            type: String,
        },
        techStatus: {
            type: [{
                status: {
                    type: String,
                    enum: ['Requirement Submitted', 'Requirement Review By Zestire', 'Hiring Process & Interview Started', 'Interview Process Completed', 'Candidate Shortlisted'],
                    default: 'Requirement Submitted',
                },
                date: {
                    type: Date,
                    default: Date.now(),
                }
            }],
            default: [{ status: 'Requirement Submitted' }]
        }
    },
    { timestamps: true }
);

// Creating model
module.exports= mongoose.model("HireTech", HireTechSchema);