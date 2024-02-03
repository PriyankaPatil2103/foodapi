const mongoose=require('mongoose')

const CustomerSchema=mongoose.Schema({
    CustomerName:String,
    CustomerAddress:String,
    CustomerMobNo:Number,
    CustomerCity:String,
    CustomerPassword:String,
    CustomerEmail:String,

})

module.exports=mongoose.model('Customer',CustomerSchema);