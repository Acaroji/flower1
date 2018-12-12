const express = require('express')
const router = express.Router();
mongoose = require('mongoose')

require("../models/User");
const User = mongoose.model("user")

// Add Routes
router.get("/",(req,res)=> {
    res.render("login", {layout: "nonav"})
})

router.post("/",(req,res)=> {
    // var password = req.body.password
    User.find({username:req.body.user},(err,result)=>{
        if(err){
            res.send("no password")
         }

        else if(result.length === 0) {
            res.send("go to registration")
        }
        else if(result[0].password !=password){
            res.send("nice try")
        }
        else {
            res.redirect("/flower-search")
        }
    })
})

module.exports = router;
