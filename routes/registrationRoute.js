const express = require("express");
//Controller
const {
  getAllRecords,
  getOneRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordsController");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRecords);
registrationRouter.get("/:id", getOneRecord);
registrationRouter.post("/", createRecord);
registrationRouter.patch("/:id", updateRecord);
registrationRouter.delete("/:id", deleteRecord);

module.exports = { registrationRouter };
