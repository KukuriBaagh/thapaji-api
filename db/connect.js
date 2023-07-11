const mongoose = require('mongoose');

const connectDB = (MONGO_URI) => {
    console.log("connect db");
    return mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


module.exports = connectDB;