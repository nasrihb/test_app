const Conge = require("../models/conge.model.js");

// Create and Save a new conge
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a conge
      const conge = new Conge({
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,
        type_conge: req.body.type_conge,
        raison: req.body.raison,
        id_user: req.body.id_user
      });
    
      // Save conge in the database
      Conge.create(conge, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the conge."
          });
        else res.send(data);
      });
 
};

exports.findOne = (req, res) => {
    Conge.findById(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found conge with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving conge with id " + req.params.userId
          });
        }
      } else res.send(data);
    });
  };
  