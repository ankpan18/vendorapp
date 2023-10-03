//Controller File

const VendorApp = require("../models/models.js");

exports.createOneVendor = (req, res) => {
  VendorApp.create(req.body)
    .then((vendor) => {
      console.log({ vendor });
      res.json({
        message: "Cheers!! You have successfully added Vendor Info",
        vendor,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your Vendor information cannot be added due to error",
        error: err.message,
      });
    });
};

exports.listAllVendor = (req, res) => {
  VendorApp.find()
    .then((vendor) => {
      console.log({ vendor });
      res.json(vendor);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isnt any vendor list available", error: err.message });
    });
  
};



exports.updateOneVendor = (req, res) => {
  VendorApp.findByIdAndUpdate(req.params.id, req.body)
    .then((vendor) => {
      console.log({ vendor });
      return res.json({
        message: "Wohoo! You have successfully updated vendor item",
        vendor,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your vendor list cannot be updated due to error",
        error: err.message,
      });
    });
};

exports.deleteVendor = (req, res) => {
  VendorApp.findByIdAndRemove(req.params.id, req.body)
    .then((vendor) => {
      console.log({ vendor });
      res.json({
        message: "Success! You have successfully deleted your vendor item",
        vendor,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your todo is not there",
        error: err.message,
      });
    });
};


exports.getOneVendor = (req, res) => {
  VendorApp.findById(req.params.id)
    .then((vendor) => {
      console.log({ vendor });
      res.json({
        message: "Success! You have successfully fetched particular vendor item by ID",
        vendor,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your Vendor list is not there",
        error: err.message,
      });
    });
};

exports.getVendorByPage = (req, res) => {
  let page=parseInt(req.params.page);
  
  VendorApp.find().skip((page-1)*5).limit(5)
    .then((vendor) => {
      console.log({ vendor });
      res.json(vendor);
      // res.json({
      //   message: "Success! You have successfully fetched vendor list using pagination",
      //   vendor,
      // });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your Vendor list is not there",
        error: err.message,
      });
    });
};