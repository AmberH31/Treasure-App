require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
var cors = require('cors');

var app = express();
var PORT = proess.env.PORT || 3000;
var mongoURI = process.env.MONGO_URI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// need to set up the MongoURI in the .env file