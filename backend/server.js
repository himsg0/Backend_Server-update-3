const app = require("./app");
const dotenv = require("dotenv");




//config


dotenv.config({path:"backend/config/config.env"});

const connectDatabase= require('./models/db');

connectDatabase();


// SSL connection 

app.listen(process.env.PORT,()=>{

    console.log('server is working on http://localhost:'+`${process.env.PORT}`)
 
});