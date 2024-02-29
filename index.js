// core modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// port
const PORT = process.env.PORT || 4000;

// app instance
const app = express();


// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// connect database
mongoose
  .connect("mongodb://127.0.0.1:27017/tickets")
  .then(() => {
    console.log("connection established");
  })
  .catch((error) => console.log(error.message));


// routes
app.use("/ticket",require("./routes/tickets.routes"));
app.use("/projectRequirement",require("./routes/project.routes"));
app.use("/jobRequirement",require("./routes/jobs.routes"));
app.use("/appliedJobs",require("./routes/appliedJobs.routes"));


// server instance
app.listen(PORT, function () {
  console.log(`Server is listening on ${PORT}`);
});
