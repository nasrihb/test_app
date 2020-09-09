module.exports = app => {
    const conge = require("../controllers/conge.controller.js");
  
    // Create a new user
    app.post("/conges/create_conge", conge.create);
    //list of leave 
    app.get("/conges/:userId", conge.findOne);

  };