const express = require('express')
const router = express.Router();
mongoose = require('mongoose')

require("../models/User");
const User = mongoose.model('user')
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// Add Routes
router.get("/",(req,res) => {
    res.render("signup",{layout:"nonav"})
})

router.post("/",(req,res,next)=> {
    const username = req.body.username;
    const password = req.body.password;
    const salt     = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    let error  = []; 
    
    if(!req.body.username) {
        error.push({text: "please add a username"})
    }
    if(!req.body.password){
        error.push({text:"please add a password"})
    }

    if(error.length > 0) {
        res.render('signup', {
            layout: "nonav",
            error: error,
            username: req.body.username,
            password: req.body.password
        })
    } else {
        const newUser = {
            username: req.body.username,
            password: hashPass
        }
        new User(newUser)
        .save()
        .then(result => {
            res.redirect('/homepage')
        })
        .catch(error =>{
            next(error);
        });
   
   
    }  
//     User.findOne({"username":username})
//         .then(result => {
//         debugger
//         if (result !== null) {
//             debugger
//             res.render("/signup",{
//             errorMessage: "The username already exists!"
            
//         });
// })
        
})   
module.exports = router;
