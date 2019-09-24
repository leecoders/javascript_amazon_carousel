const express = require("express");
const router = express.Router();
const signinRouter = router;

let model;

const passModel = modelFromApp => {
  model = modelFromApp;
};

router.use("/submit", (req, res) => {
  model.checkLogin(req, res);
});

module.exports = { signinRouter, passModel };
