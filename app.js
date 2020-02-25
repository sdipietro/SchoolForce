
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const users = require("./routes/api/users");
const students = require("./routes/api/students");
const reminders = require("./routes/api/reminders");


//this is for heroku deploy: https://open.appacademy.io/learn/swe-in-person-nyc/mern-stack-curriculum/deploying-your-app
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

//heroku deploy script END

const port = process.env.PORT || 5000;

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
app.listen(port, () => console.log(`Server is running on port ${port}`));




