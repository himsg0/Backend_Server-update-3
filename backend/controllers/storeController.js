const req = require("express/lib/request");
const res = require("express/lib/response");
const Store= require("../models/storeModel");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { distinct } = require("../models/storeModel");
const banners= require("../models/localityModel");
const cate= require("../models/categoryModel");



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

