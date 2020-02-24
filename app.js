const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const students = require("./routes/api/students");
const reminders = require("./routes/api/reminders");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// basic route to render info on our page
app.get("/", (req, res) => res.send("SchoolForce is in session"));

app.use("/api/users", users);
app.use("/api/students", students);
app.use("/api/reminders", reminders);

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//tell Express to start a socket and listen for connections on the path.
app.listen(port, () => console.log(`Server is running on port ${port}`));




