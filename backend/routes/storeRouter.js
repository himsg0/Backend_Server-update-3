const express =require('express');
const {getAllCity, createStore, updateStore,createsubandcat
      ,getbannerbysub , getAlllocality, getAllCategories
      ,getAlldata , createbanner, getAllsubCate,getAllcattable,getAllStoreCategories,getAllStoreSubcat}= require("../controllers/storeController");

const router= express.Router();

router.route("/stores/all").get(getAlldata); // get all data by params
router.route("/stores/city").get(getAllCity); // get all distinct city
router.route("/stores/locality").get(getAlllocality);       // get locality by city
router.route("/stores/categories").get(getAllCategories);    // get all cat
router.route("/stores/subcategories").get(getAllsubCate);     // get sub cat by cat
router.route("/stores/Allcategories").get(getAllStoreCategories);    // get all cat from store
router.route("/stores/Allsubcategories").get(getAllStoreSubcat);     // get sub cat by cat store
router.route("/stores/getbanner").get(getbannerbysub);       // get banners by locality
router.route("/stores/cattable").get(getAllcattable);  
      

router.route("/store/banner/new").post(createbanner);        // create banner 
router.route("/store/new").post(createStore);                //create store
router.route("/store/catandsub").post(createsubandcat);                     // create cat and sub cat
router.route("/stores/:id").put(updateStore);             //update store by ID

module.exports=router;