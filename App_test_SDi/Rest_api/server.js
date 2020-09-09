const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "" });
});

require("./app/routes/user.routes.js")(app);
require("./app/routes/conge.routes.js")(app);
require('./app/routes/auth.routes')(app);


app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});