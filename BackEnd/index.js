const express = require('express');
const bodyParser = require("body-parser");
const connectToMongo = require('./Db');
const User = require('./models/User');
connectToMongo();

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/signup',require('./routes/Usersignup'))

app.get("/",function(req,res){
    const user = User(req.body);
    user.save();
    res.send("Hii sunil");
  })




//listen

app.listen(process.env.PORT || 3000, function(){
    console.log("server started at port 3000")
  })
  