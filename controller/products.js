const Product = require("../models/product");

const getAllProducts = async (req, res) => {

    //__________________________________________SEARCH FUNCTIONALITY
    // req.query is fetched from qery string in format of <?name=iphone>
    const { company, name, featured, sort, select } = req.query;
    console.log("🚀 ~ file: products.js:7 ~ getAllProducts ~ sort:", sort)
    const queryObject = {};
    // Request Object to query param as company
    if (company) {
        console.log(queryObject)
    }
    // Request Object to query param as name
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    if (featured) {
        queryObject.featured = featured;
    }

    //_________________________________________________SORT FUNCTIONALITY

    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    
    if (select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    console.log(queryObject);

    const myData = await apiData;
    res.status(200).json({ myData });
};
//__________________________________________SEARCH FUNCTIONALITY ENDS HERE

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).select("name company");
    res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };