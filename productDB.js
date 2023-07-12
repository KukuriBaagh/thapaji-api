const connectDB = require("./db/connect");
const Product = require("./models/product");
require("dotenv").config();

const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();  // This Line will delete old data before creating new data to prevent duplicate data entry
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};


start();