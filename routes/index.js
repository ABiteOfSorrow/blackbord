var express = require('express');
var router = express.Router();
var articleModel = require('../models/articles');
var orderModel = require('../models/order')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks');
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages');
});

/* GET Users page. */
router.get('/users-page', function(req, res, next) {
  res.render('users');
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {
  articleList = await articleModel.find();
  res.render('catalog', {articleList : articleList});
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  orderList = await orderModel.find();
  res.render('orders-list', {orderList : orderList});
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {
  orderDetail = await orderModel.findById(req.query.id).populate('articles');

  res.render('order', {orderDetail : orderDetail});
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;



