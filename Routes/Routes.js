const express=require('express');
const router=express.Router()

const CustControler=require('../Controlers/CustomerControlers');
router.post('/addcustomer',CustControler.addCustomer)
router.get('/getallcustomer',CustControler.getAllCustomer)
router.post('/updatePassword',CustControler.updatePassword)
router.post('/deletecustomer',CustControler.deleteCustomer);
router.post('/customerbyId',CustControler.CustomerById);
router.post('/dologin',CustControler.doLogin);


const FoodControler=require('../Controlers/FoodControlers');
router.post('/addfood',FoodControler.addFood);
router.get('/getallfood',FoodControler.getAllFood);
router.post('/updatefoodprice',FoodControler.updateFoodPrice);
router.post('/getfoodbytype',FoodControler.getFoodByType);
router.post('/getfoodbycategory',FoodControler.getFoodByCategory);
router.post('/deletefood',FoodControler.deleteFood);

//order 
const OrderControler=require('../Controlers/OrderControlers');
router.post('/addorder',OrderControler.addOrder);
router.get('/getallorders',OrderControler.getAllOrders);
router.post('/getorderbyid',OrderControler.getOrderById);
router.post('/getorderbycustid',OrderControler.getOrderByCustomerId);
router.post("/updateOrderStatus",OrderControler.updateOrderStatus);
router.post("/getOrderStatusById",OrderControler.getOrderStatusById);
module.exports=router