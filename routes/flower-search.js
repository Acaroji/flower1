const express = require('express')
const router = express.Router();
mongoose = require('mongoose')

require("../models/Flowers");
const Flower = mongoose.model("flowers")

//Search Routes
router.get("/",(req,res)=>{
    res.render("search")

})

router.post("/", (req,res) => {
   
    Flower.find({
       $or:[
        {Name:
            {'$regex':req.body.searchFlower,$options:'i'}
        },
        {Color:
            {'$regex':req.body.searchFlower,$options:'i'}
        },
        {Season:
            {'$regex':req.body.searchFlower,$options:'i'}
        }
    ]})
    .then(result =>{
        console.log("result", result)
        res.render("search",{showFlower:result},)
    })
    .catch((err)=>{
        throw err;

    });
});  



module.exports = router;