const app = require("./app");
const dotenv = require("dotenv");




//config

dotenv.config({path:"backend/config/config.env"});

const connectDatabase= require('./models/db');

connectDatabase();


// SSL connection 

var https = require('https');

var fs = require('fs');

var options = {

  key: fs.readFileSync("/etc/ssl/private/kubeshop.in.key"),

  cert: fs.readFileSync("/etc/ssl/private/6eaf47193d45ac9c.crt"),

  ca: [

          

          fs.readFileSync('/etc/pki/tls/certs/ca-bundle.crt')

       ]
};


https.createServer(options, app).listen(8080);