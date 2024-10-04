module.exports = app => {
    const coffee = require("../controllers/coffee.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", coffee.create);
  
    router.get("/", coffee.findAll);
  
    router.put("/:id", coffee.update);
  
    router.delete("/:id", coffee.delete);
  
    app.use("/api/coffee", router);
  }