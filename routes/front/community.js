const express = require("express");
const router = express.Router();
const title = "Community";

/********** MODELS ****************/
// user model
var User = require("../../models/user");

router.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      res.render("community", { title: title, users: users });
    }
  });
});

module.exports = router;
