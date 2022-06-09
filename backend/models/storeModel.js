const mongoose=require('mongoose');



const storeSchema= new mongoose.Schema({
    storename:{
        type:String,
        required:[true,"please enter product Name"]
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Description"]
    },
     package:{
        type:String
        
    },

    phone:{
      type: Number,
    required: [true,"Please Enter the Phone Number"],
    maxLength: [10, "Price cannot exceed 10 characters"]
    },
    email:{
      type: String,
      required: [true,"Please Enter The Emil Id"]
    },
    city:{
      type: String,
      required:[true,"Please Enter City Name"]
    },

    locality:{
      type: String,
    required:[true,"Please Enter Locality Name"]
    },
    address:{
      type: String,
    required:[true,"Please Enter Address"]
    },


    ratings: {
      type: Number,
      default: 0,
    },

   numOfReviews: {
  type: Number,
  default: 0,
},

reviews: [
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
],


    

  homeDelivery:{
    type: Boolean,
    default: false
},

  onlineShop:{
    type: Boolean,
    default: false
},
featured:{
  type: Boolean,
  default: false
}, 

tags:[
  {
    tags_name: {
      type: String,
    }
  }
],

vendor: 
    {
      vendor_name: {
        type: String,
        required: true,
      },
      vendor_address: {
        type: String,
        required: true,
      },
    },

    brand: [{
      website:{
          type: String,
      },
      insta:{
          type: String,
      }

  }],


  media: [{
    cover:{
        type:String,
    },
    display_img:{
        type: String,
    },
    vendor_img:{
       type: String,
  }

}],

  category_type: {
  type: String,
  },

  category: {
    type: String,
    required: [true, "Please Enter  Category"],
  },

  sub_category: {
    type: String,
    required: [true, "Please Enter sub Category"],
  },
  
  offer: [{
    image:{
        type:String,
    },
    initiation_date:{
        type: Date,
        default: Date.now
    },
    expiry_date:{
       type: Date,
  }

}],
 
  

    

  


    
    
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    
  
  createdAt: {
    type: Date,
    default: Date.now,
  }
    

    
});


module.exports = mongoose.model("Store", storeSchema);