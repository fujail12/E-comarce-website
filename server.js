const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors"); // নতুন লাইন
const User = require("./models/User");

const app = express();
app.use(cors()); // এখানে রাখতে হবে
app.use(bodyParser.json());