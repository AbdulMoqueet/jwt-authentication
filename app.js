const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

const mongoDBConnectionURL = "mongodb://localhost/usersDB";
mongoose.connect(mongoDBConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(res => app.listen(5000, () => {
        console.log("Server started at port: 5000");
        console.log("connected to mongoDB");
    }))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send("Hello!");
});
app.use(authRoutes);