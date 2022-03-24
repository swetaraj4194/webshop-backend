const { Router, request, response } = require("express");
const Products = require("../models").product;
const Categories = require("../models").category;
const router = new Router();
// get all products
// test http get :4000/products/
router.get("/", async (request, response, next) => {
  try {
    const product = await Products.findAll({
      include: [Categories],
    });

    response.send(product);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// get a specific product with it's category
// test http get :4000/products/:id
router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const product = await Products.findByPk(id, { include: Categories });
    response.send(product);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
module.exports = router;
