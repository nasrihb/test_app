const sql = require("./db.js");

// constructor
const Conge = function(conge) {
  this.date_debut = conge.date_debut;
  this.date_fin = conge.date_fin;
  this.type_conge = conge.type_conge;
  this.raison = conge.raison;
  this.id_user = conge.id_user;  

};

Conge.create = (conge, result) => {
  sql.query("INSERT INTO conges SET ?", conge, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Conge: ", { id: res.insertId, ...Conge });
    result(null, { id: res.insertId, ...Conge });
  });
};


Conge.findById = (userId, result) => {
    sql.query(`SELECT * FROM conges WHERE id_user = ${userId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found conge: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found conge with the id
      result({ kind: "not_found" }, null);
    });
  };





module.exports = Conge;