const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRoute = require('./src/routes/auth');
const favRoute = require('./src/routes/favorite');
dotenv.config();
//mongoose connection
var uri = 'mongodb+srv://shyam:password%40123@cluster0.vt0xb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true},() => {
    console.log('Connected to database');
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("common"));

const port = process.env.PORT || 5000;

app.get('/',(req,res) => {
    res.send('hi');
});
app.use('/api/users',authRoute);
app.use('/api/favorite', favRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
