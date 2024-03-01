const express = require("express");
const {getEmployeeTicket,setEmployeeTicket} = require("../controllers/employeeTicket.controller");
const router = express.Router();
router.get("/:id", getEmployeeTicket);
router.post("/", setEmployeeTicket);
module.exports = router;
