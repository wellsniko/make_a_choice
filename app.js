const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const users = require("./routes/api/users");
const choices = require("./routes/api/choices");
const passport = require('passport');



mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./config/passport')(passport);
app.use(passport.initialize());

app.use("/api/users", users);
app.use("/api/choices", choices);
app.listen(port, () => console.log(`Server is running on port ${port}`));


app.get("/", (req, res) => res.send("anything"));