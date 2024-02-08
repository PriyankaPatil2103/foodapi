const Food = require("../Model/FoodSchema");

exports.addFood = (req, res) => {
  const food = new Food({
    FoodName: req.body.FoodName,
    FoodType: req.body.FoodType,
    FoodCategory: req.body.FoodCategory,
    FoodImg: req.body.FoodImg,
    FoodPrice: req.body.FoodPrice,
  });

  food
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getAllFood = (req, res) => {
  Food.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.updateFoodPrice=(req,res)=>{
    Food.findByIdAndUpdate({_id:req.body.cid},
        {FoodPrice:req.body.updatePrice},
        {new:true}).then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
}
exports.getFoodByType=(req,res)=>{
    Food.find({FoodType:req.body.FoodType})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
exports.getFoodByCategory=(req,res)=>{
    Food.find({FoodCategory:req.body.FoodCategory})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
exports.deleteFood=(req,res)=>{
    Food.deleteOne({_id:req.body.cid})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
