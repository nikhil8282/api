const mongoose=require("mongoose");
const validator=require("validator");

// import mongoose from 'mongoose';
// import Validator from "validator";
// import jwt from "jsonwebtoken";
// import bcrypt from 'bcrypt'

const ResourceManagementSchema = new mongoose.Schema({
    employeeName: {
        type: String,
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!Validator.isEmail(value)) {
                throw new Error("Enter A Valid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    // employeePosition: {
    //     type: String,
    //     required: true,
    // },
    // joiningDate: {
    //     type: String,
    //     required: true,
    // },
    // skills: {
    //     type: [String],
    //     required: true,
    // },
    // salary: {
    //     type: String,
    //     required: true,
    // },
    // reportingManager: {
    //     type: String,
    //     required: true,
    // },
    // assignedDeviceId: {
    //     type: String,
    //     required: true,
    // },
    // remark: {
    //     type: String,
    // },
    // userRole: {
    //     type: String,
    //     default: "employee"
    // },
    weeklyStatus: [{
        weekStartDate: {
            type: Date,
            required: true,
        },
        weekEndDate: {
            type: Date,
            required: true,
        },
        tasks: [{
            date: {
                type: Date,
                required: true,
            },
            taskDescription: {
                type: String,
                required: true,
            }
        }],
        rating: {
            type: Number,
            default: null // Initially no rating given
        }
    }]
});


// password hashing
// ResourceManagementSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return;
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// create jwt token
// ResourceManagementSchema.methods.createJWT = async function () {
//     return jwt.sign(
//         { _id: this._id },
//         process.env.JWT_KEY,
//         {
//             expiresIn: "7d",
//         }
//     );
// };


// compare password
// ResourceManagementSchema.methods.comparePassword = async function (userPassword) {
//     const isMatch = await bcrypt.compare(userPassword, this.password);
//     return isMatch;
// };


// creating model
module.exports= mongoose.model("ResourceManagement", ResourceManagementSchema); 