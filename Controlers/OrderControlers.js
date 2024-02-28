const Order = require("../Model/OrderSchema");

exports.addOrder = (req, res) => {
  const ord = new Order({
    OrderTotal: req.body.OrderTotal,
    OrderSize: req.body.OrderSize,
    FoodId: req.body.FoodId,
    CustId: req.body.CustId,
    OrderItems: req.body.OrderItems,
  });
  ord
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getAllOrders = (req, res) => {
  Order.find()
    .populate("CustId")
    .populate("OrderItems.FoodId", "FoodName FoodPrice")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getOrderById = (req, res) => {
  Order.findOne({ _id: req.body.OrderId })
    .populate("CustId")
    .populate("OrderItems.FoodId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getOrderByCustomerId = (req, res) => {
  Order.find()
    .where("CustId")
    .eq({ _id: req.body.CustId })
    .where("OrderStatus")
    .eq(req.body.OrderStatus)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.updateOrderStatus = (req, res) => {
  Order.findByIdAndUpdate(req.body.oid,
     { OrderStatus: req.body.OrderStatus })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getOrderStatusById = (req, res) => {
  Order.find()
    .where("OrderStatus")
    .eq(req.body.OrderStatus)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(result);
    });
};
