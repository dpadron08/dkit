const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;
//const port = 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
//const uri = 'mongodb+srv://david-1:code4good@cluster0-b22zo.gcp.mongodb.net/test?retryWrites=true&w=majority';

//mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true});
mongoose.connect(uri, {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfuly");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}!`);
});

//const port = 3000



//app.get('/', (req, res) => res.send('Hello World'))

//app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});
//app.listen(port, () => {
//  console.log('Server is running on port: ${port}!');
//});