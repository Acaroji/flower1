const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("intro", {layout: "nonav"})
})

module.exports = router;



