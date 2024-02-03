const Customer = require("../Model/CustomerSchema");

exports.addCustomer = (req, res) => {
  const cust = new Customer({
    CustomerName: req.body.CustomerName,
    CustomerAddress: req.body.CustomerAddress,
    CustomerMobNo: req.body.CustomerMobNo,
    CustomerCity: req.body.CustomerCity,
    CustomerPassword: req.body.CustomerPassword,
    CustomerEmail: req.body.CustomerEmail,
  });
  //  CustomerName:String
  //  CustomerAddress:String,
  // CustomerMobNo:Number,
  // CustomerCity:String,
  // CustomerPassword:String,

  cust
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getAllCustomer = (req, res) => {
  Customer.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.updatePassword = (req, res) => {
  Customer.findByIdAndUpdate(
    { _id: req.body.cid },
    { CustomerPassword: req.body.newPassword },
    { new: true }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.deleteCustomer = (req, res) => {
  Customer.deleteOne({ _id: req.body.cid })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(err).send(err);
    });
};

exports.CustomerById = (req, res) => {
  Customer.find({ _id: req.body.CustomerId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.doLogin = (req, res) => {
  Customer.findOne({
    CustomerEmail: req.body.CustomerEmail,
    CustomerPassword: req.body.CustomerPassword,
  })
    .then((result) => {
      if (result) {
        res.status(200).json({
          data: result,
          success: true,
        });
      } else {
        res.status(200).json({
          data: {},
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
