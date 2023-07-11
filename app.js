require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get('/', (req, res) => {
    res.send('Hi I am Live');
});

// middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} yes i am connected`);
    });
} catch (error) {
    console.log(error);
}
};

start();