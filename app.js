const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("anything"));
app.listen(port, () => console.log(`Server is running on port ${port}`));
