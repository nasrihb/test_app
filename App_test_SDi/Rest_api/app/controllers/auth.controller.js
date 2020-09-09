const User = require("../models/user.model.js");
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
    User.findById(req.body.email, (err, data) => {
     
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Adresse email  n'existe pas  veuillez réessayer.`
            });
          } else {
            res.status(500).send({
              message: "Erreur lors de la récupération de utilisateur avec e-mail" 
            });
          }

          }
        else {
            
            //var validpassword = bcrypt.compareSync(pass,data.password)
            if (req.body.password==data.password){
            var token = jwt.sign({ id: data.id_user }, config.secret, {
            expiresIn: 86400 // 24 hours
            });
            res.send({data, accessToken:token});
            
            } else  {
                return res.status(401).send({
                accessToken: null,
                message: "Mot de passe incorrect veuillez réessayer!"
            });}
        }
      });
      
};