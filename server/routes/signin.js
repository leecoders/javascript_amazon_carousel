const express = require("express");
const router = express.Router();
const signinRouter = router;

// router.use("/submit", (req, res) => {
//   const { id, password } = req.body;
//   console.log(id, password);
// });

module.exports = { signinRouter };
