var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.redirect("http://127.0.0.1:63771/web/");
});

module.exports = router;
