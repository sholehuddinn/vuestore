module.exports = () => {
  const Products = require('../controllers/product.controller')
  const router = require('express').Router();

  router.get('/', Products.findAll);

  app.use('/api/products', router)
}