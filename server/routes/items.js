const express = require("express");
const router = express.Router();
const itemsRouter = router;

let model;

const passModelToItems = modelFromApp => {
  model = modelFromApp;
};

router.use("/check-item-name", function(req, res) {
  model.checkItemNameDuplicate(req, res);
});

router.use("/add", function(req, res) {
  model.addItem(req, res);
});

module.exports = { itemsRouter, passModelToItems };
