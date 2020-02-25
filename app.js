
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const users = require("./routes/api/users");
const students = require("./routes/api/students");
const reminders = require("./routes/api/reminders");

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// basic route to render info on our page
app.get("/", (req, res) => res.send("SchoolForce is in session"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/users", users);
// app.use("/api/tweets", tweets);


//tell Express to start a socket and listen for connections on the path.
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




