const mongoose = require("mongoose");
const AppliedJobs = new mongoose.Schema({
    candidateId:{
        type:String,
        required:true
    },
    jobId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Job Applied"
    }
})
module.exports = mongoose.model('AppliedJobs',AppliedJobs);