const mongoose = require("mongoose");

const deals = new mongoose.Schema({
  
    titleDeal: {
        type: String,
        
      },
  festivedealsbanner: [
    {
      offerurl: {
        type: String
        
      },
      vendorid: {
        type: String,
        
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      
    }
  ],

  

  
});

module.exports = mongoose.model("deals", deals);