//todo.routes.js

const express = require("express");

const router = express.Router();

const {
  listAllVendor,
  createOneVendor,
  updateOneVendor,
  deleteVendor,
  getOneVendor,
  getVendorByPage
} = require("../controllers/vendor.controller.js");

router.get("/", listAllVendor);

router.post("/", createOneVendor);

router.put("/:id", updateOneVendor);

router.delete("/:id", deleteVendor);

router.get("/:id", getOneVendor);

router.get("/page/:page", getVendorByPage);

module.exports = router;