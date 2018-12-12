const express = require('express')
const router = express.Router();
mongoose = require('mongoose')

require("../models/Flowers");
const Flower = mongoose.model("flowers")

//share routes
router.get('/',(req,res)=>{
    res.render("share")
})
router.post('',(req,res,next)=>{
    const {Name,Colors, Characteristcs,Phrase,Season}= req.body;
    const newFlower = new Flower({Name,Colors,Characteristcs,Phrase,Season})
    newFlower.save()
    .then((flower)=>{
        res.redirect("/flower-search")
    })
    .catch((error)=>{
        console.log(error);
    })


})

module.exports = router;