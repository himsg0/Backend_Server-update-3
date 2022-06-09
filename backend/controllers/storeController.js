const req = require("express/lib/request");
const res = require("express/lib/response");
const Store= require("../models/storeModel");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { distinct } = require("../models/storeModel");
const banners= require("../models/localityModel");
const cate= require("../models/categoryModel");
const title= require("../models/titleModel");



// Create Product --Admin
exports.createStore= async(req,res,next)=>{
    const product= await Store.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}


// Create Banner
exports.createbanner= async(req,res,next)=>{
    const product= await banners.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}


// create cat and sub cat
exports.createsubandcat= async(req,res,next)=>{
    const product= await cate.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}



// get all data with params
exports.getAlldata=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(Store.find(),req.query).search().filter();
    const products= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        products
    });
});


// get all city

exports.getAllCity=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(Store.distinct("city"),req.query);
    const products= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        products
    });
});

// to get all locality
exports.getAlllocality=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(Store.distinct(),req.query).locality();
    const products= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        products
    });
});

// get all distinct cat
exports.getAllCategories=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(cate.distinct("categories_Name"),req.query);
    const products= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        products
    });
});

// to get all_sub_categories

exports.getAllsubCate=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(cate.find({}),req.query).search().filter();
    const products= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        products
    });
});

// to get all data from cat model
exports.getAllcattable=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(cate.find({}),req.query);//.search().filter();
    const products= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        products
    });
});



// get all sub cat

// get banner by subcat

exports.getbannerbysub=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(banners.find({},{"images.url":1,_id:0}),req.query).searchBanner();
        const products= await apiFeature.query;
       
    
        res.status(200).json({
            success:true,
            products
        });
    });


		//update changes on server




// Update product
exports.updateStore= async(req,res,next)=>{
    let product= await Store.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not Found"
        })
    }

    product= await Store.findByIdAndUpdate(req.params.id,res.body,{
        new: true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product 
    })
}

// UPDATE FROM STORE MODEL

//get all cat from store
exports.getAllStoreCategories=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(Store.distinct("category"),req.query);
    const products= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        products
    });
});


// get all sub cat from store

exports.getAllStoreSubcat=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(Store.distinct(),req.query).subcat();
    const products= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        products
    });
});


// Feature API(13) Commit by"Himanshu"  ++++****++++

// all Vendors. add on 1.04.2022 controller for offers and vendors ON App

exports.getAllFeaturedata=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(Store.find(),req.query).search().filter();
    const stores= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        OffersOrVendors : false,
        
        stores
    });
});

exports.getAll2Featuredata=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(Store.find(),req.query).search().filter();
    const stores= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        OffersOrVendors : true,
        
        stores
    });
});

//Feature Fashion.

exports.getFashionFeature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Fashion","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : false,
        stores
    });
});

exports.getFashion2Feature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Fashion","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : true,
        stores
    });
});



//Feature Pets. 

exports.getPetsFeature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Pets","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : false,
        stores
    });
});

exports.getPets2Feature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Pets","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : true,
        stores
    });
});

//Feature Food and Bevrages.

exports.getFoodandBevrageFeature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Food and Beverages","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : false,
        stores
    });
});

exports.getFoodandBevrage2Feature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Food and Beverages","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : true,
        stores
    });
});

//Feature Beauty Wellness.

exports.getWellnessFeature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Wellness","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : false,
        stores
    });
});

exports.getWellness2Feature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Wellness","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : true,
        stores
    });
});



//Feature Art& Craft.

exports.getArtandCraftFeature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Art and Craft","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : false,
        stores
    });
});

exports.getArtandCraft2Feature= catchAsyncErrors(async(req,res)=>{
    const apiFeature= new ApiFeatures(Store.find({"category":"Art and Craft","featured":"true"}),req.query).search().filter();
    const stores= await apiFeature.query;

    res.status(200).json({
        success:true,
        OffersOrVendors : true,
        stores
    });
});

// get all title 
exports.gettitledata=catchAsyncErrors(async(req,res)=>{
    const apiFeature = new ApiFeatures(title.find(),req.query).search().filter();
    const stores= await apiFeature.query;
   

    res.status(200).json({
        success:true,
        stores
    });
});

// Create New Review or Update the review
exports.createStoreReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, storeId } = req.body;
  
    const review = {
      
      rating: Number(rating),
      comment,
    };
  
    const product = await Store.findById(storeId);
  
    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }
  
    let avg = 0;
  
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    product.ratings = avg / product.reviews.length;
  
    await product.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  });