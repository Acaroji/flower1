const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    /*if user is not signed in 
    render "intro"

    else{
        render "homepage"
    }
    */

    res.render("flower-homepage")
})

module.exports = router;