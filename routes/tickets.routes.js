const express = require("express");
const {getAllTicket,setTicket,getTicket,updateTicketStatus}=require("../controllers/tickets.controller");
const router=express.Router();
router.get("/:id",getTicket);
router.get("/",getAllTicket);
router.post("/",setTicket);
router.put("/status/update/:id",updateTicketStatus);
module.exports= router;