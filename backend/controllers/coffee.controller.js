const db = require("../models");
const Coffee = db.coffee;

exports.create = (req, res) => {

  console.log(req.body);

  const coffee = {
      type: req.body.type,
      topping: req.body.topping,
  };

  console.log('Coffee:', coffee);

  Coffee.create(coffee).then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while creating the notebook." });
  });
};

exports.findAll = (req, res) => {
  Coffee.findAll().then((data) => {
    res.send(data);
  })
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {
  const id = req.params.id;

  Coffee.destroy({ where: { id: id } }).then(() => {
    console.log("borrado");
    res.send({ message: "borrado" });
  });
};