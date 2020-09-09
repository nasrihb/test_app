const User = require("../models/user.model.js");
var bcrypt = require("bcryptjs");

// Create and Save a new user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      //var salt = bcrypt.genSaltSync(10);
      //var hash = bcrypt.hashSync(req.body.password, salt);
      // Create a user
      const user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password, 
        role : req.body.role

      });
    
      // Save user in the database
      User.create(user, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
          });
        else res.send(data);
      });
 
};



// Retrieve all users from the database.
exports.findusers = (req, res) => {
    User.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
        else res.send(data);
      });
};


// Update a user identified by the userid in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      User.updateById(
        req.params.userId,
        new User(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found user with id ${req.params.userId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating user with id " + req.params.userId
              });
            }
          } else res.send(data);
        })
};

// Delete a user with the specified userid in the request
exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.userId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete User with id " + req.params.userId
            });
          }
        } else res.send({ message: `User was deleted successfully!` });
      });
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all users."
          });
        else res.send({ message: `All users were deleted successfully!` });
      });
};
exports.findOne = (req, res) => {
  User.findById(req.params.email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {

        res.status(404).send({
          message: `Not found user with email ${req.params.email}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with email " + req.params.email
        });
      }
    } else res.send(data);
  });
};