const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error")
var cors=require('cors');
const envs = require('./config.js');
app.use(express.json())


var corsOptions = {
    origin: ' https://www.kubecity.in',

    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//Route Import
const store = require("./routes/storeRouter")
const blog= require("./routes/blogRouter")
const contact=require("./routes/contactRouter")
const partner=require("./routes/partnerRoute")
const kube=require("./routes/kubeRouter")
app.use(cors(corsOptions))

//Middle-ware for Error
app.use(errorMiddleWare)
app.use(express.static("./Public")) 
console.log('/api/v1/'+`${envs.TOKEN}`)
app.use('/api/v1/'+`${envs.TOKEN}`,store,blog,contact,partner,kube);


module.exports = app
