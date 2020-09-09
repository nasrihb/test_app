module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    // Create a new user
    app.post("/users/create_user", user.create)

    // Retrieve a single user with email 
    app.get("/users/:email", user.findOne);
    // Retrieve all users
    app.get("/users", user.findusers);
  
    // Update a user with userId
    app.put("/users/:userId", user.update);
  
    // Delete a user with userId
    app.delete("/users/:userId", user.delete);
  
    // delete all users
    app.delete("/users/delete_all", user.deleteAll);
  };