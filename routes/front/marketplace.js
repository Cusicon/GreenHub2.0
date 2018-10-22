const express = require("express");
const router = express.Router();
const title= "Marketplace";

/********** MODELS **********/
var Product = require('../../models/product');

/********** ROUTES **********/

// MarketPlace route
router.get("/", (req, res) => {
  Product.find((err, items) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      res.render("marketplace", { title: title, items: items });
    }
  });
});

// Marketplace/view route
router.get("/view", (req, res) => {
  res.render("view-product", { title: "Marketplace" });
});

module.exports = router;
