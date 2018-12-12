const express =  require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const path = require('path');

const app = express();

//for cookies
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

//middleware to enable session in express
app.use(session({
    secret: "basic-auth-secret",
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
})
}));

//Connect MongoDB with Mongoose
mongoose.connect('mongodb://localhost:27017/flowers', function(err){
    if(err){
        console.log("ERROR",err)
    }
})

//Load Middleware Handlebars
app.engine(".hbs",exphbs({
    defaultLayout:"main",
    extname:".hbs",
    layoutsDir: __dirname + "/views/layout"
}))

app.set('view engine','hbs')

//Load Static Folder 
app.use(express.static(path.join(__dirname,'public')))

//Bodyparser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//Load Routes
const flowerSearch = require("./routes/flower-search");
const flowerLogin = require("./routes/flower-login");
const flowerHomePage = require("./routes/flower-homepage");
const flowerIntro = require("./routes/flower-intro");
const flowerSignUp = require("./routes/flower-signup");
const flowerShare = require("./routes/flowe-share");

//Implement Routs

app.use("/flower-search",flowerSearch)
app.use("/flower-login", flowerLogin)
app.use("/", flowerIntro)
app.use("/flower-homepage",flowerHomePage)
app.use("/flower-signup",flowerSignUp)
app.use("/flower-share",flowerShare)


app.get("/homepage", (req, res) =>{

    res.render("homepage")
})

const port = 3000;
app.listen(port,()=>{
    console.log('Server has started'+ port)
})