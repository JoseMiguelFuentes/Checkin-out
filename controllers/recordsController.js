const { Registration } = require("../models/registrationModel");
const express = require("express");

const getAllRecords = async (request, response) => {
  try {
    const records = await Registration.findAll();
    response.status(200).json({
      status: "success",
      data: { records },
    });
  } catch (error) {
    console.error(error);
  }
};
const getOneRecord = async (request, response) => {
  try {
    const { id } = request.params;
    const record = await Registration.findOne({ where: { id } });
    if (!record) {
      response.status(404).json({
        status: "error",
        message: "We couldn't find the record requested",
      });
    }
    response.status(200).json({
      status: "success",
      data: { record },
    });
  } catch (error) {
    console.error(error);
  }
};
const createRecord = async (request, response) => {
  try {
    const { entranceTime } = request.body;
    const entrance = await Registration.create({
      entranceTime,
    });
    response.status(201).json({ status: "success", data: { entrance } });
    console.log(entrance);
  } catch (error) {
    console.log(error);
  }
};

const updateRecord = async (request, response) => {
  try {
    const { id } = request.params;
    const { exitTime } = request.body;
    const record = await Registration.findOne({ where: { id } });
    if (!record) {
      response.status(404).json({
        status: "error",
        message: "We couldn't find the record requested",
      });
    }
    record.update({
      exitTime,
      status: "Out",
    });
    response.status(201).json({ status: "success", data: { record } });
    console.log(record);
  } catch (error) {
    console.log(error);
  }
};

const deleteRecord = async (request, response) => {
  try {
    const { id } = request.params;
    const record = await Registration.findOne({ where: { id } });
    if (!record) {
      return response.status(404).json({
        status: "error",
        message: "We couldn't find the record requested",
      });
    }
    const status = await record.status;
    if (status === "Working") {
      record.update({ status: "Cancelled" });
      return response.status(204).json({ status: "success" });
    } else if (status === "Out") {
      return response
        .status(406)
        .json({ status: "error", message: "The employee has already left" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRecords,
  getOneRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
