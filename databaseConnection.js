const url = process.env.DB_URI
const mongoose = require('mongoose');

mongoose.connect(url).then(() => console.log("Connected")).catch(err => console.log(err));
