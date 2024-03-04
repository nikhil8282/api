const mongoose = require("mongoose");
const CandidateSchema=new mongoose.Schema({
    skills:{
        type:[String],
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model('Candidate',CandidateSchema);