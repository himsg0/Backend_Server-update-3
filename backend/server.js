const app = require("./app");
const dotenv = require("dotenv");




//config


dotenv.config({path:"backend/config/config.env"});

const connectDatabase= require('./models/db');

connectDatabase();


// SSL connection 
const port= process.env.PORT || 3000;

app.listen(port,()=>{

    console.log('server is working on http://localhost:'+`${process.env.PORT}`)
 
});