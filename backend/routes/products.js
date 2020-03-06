const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = Number(req.body.id);
  const sku = Number(req.body.sku);
  const title= req.body.title;
  const description = req.body.description;
  const availableSizes = req.body.availableSizes;
  const price = Number(req.body.price);
  const isFreeShipping = Boolean(req.body.isFreeShipping);

  const newProduct = new Product({
    id,
    sku,
    title,
    description,
    availableSizes,
    price,
    isFreeShipping,
  });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));    
});

module.exports = router;