const getAllProducts = async(req, res) => {
    console.log("🚀 ~ file: product.js ~line 2 ~getAllProducts ~req", req.query);
    res.status(200).json({msg: "I sm getAllProducts"});
};

const getAllProductsTesting = async(req, res) => {
    res.status(200).json({msg: "I am getAllProductsTesting"});
};

module.exports = { getAllProducts, getAllProductsTesting };