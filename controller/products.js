const Product = require("../models/product");

const getAllProducts = async (req, res) => {

    //__________________________________________SEARCH FUNCTIONALITY
    const { company, name } = req.query;
    const queryObject = {};
    // Request Object to query param as company
    if (company) {
        queryObject.company = { $regex: company, $options: "i" };
        console.log(queryObject)
    }
    // Request Object to query param as name
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    if (featured) {
        queryObject.featured = featured;
    }
    console.log(queryObject);
    const myData = await Product.find(queryObject);
    res.status(200).json({ myData });
};
//__________________________________________SEARCH FUNCTIONALITY ENDS HERE

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };