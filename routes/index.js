var express = require('express');
var router = express.Router();
var articleModel = require('../models/articles');
var orderModel = require('../models/order')
var userModel = require('../models/users')



/* GET home page. */
router.get('/', async function(req, res, next) {
  stockCheck = await articleModel.find({stock: {$lt : 1 }});
  checker = await userModel.findById("5c52e4efaa4beef85aad5e52");
  res.render('index', {stockCheck, checker});
});

/* GET tasks page. */
router.get('/tasks-page', async function(req, res, next) {
  taskList = await userModel.findById("5c52e4efaa4beef85aad5e52");
  res.render('tasks', {taskList : taskList});
});

/* GET Messages page. */
router.get('/messages-page', async function(req, res, next) {
  messageList = await userModel.findById("5c52e4efaa4beef85aad5e52");
  res.render('messages', {messageList : messageList});
});

/* GET Users page. */
router.get('/users-page', async function(req, res, next) {
  userList = await userModel.find();
  res.render('users', {userList : userList});
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
router.get('/charts', async function(req, res, next) {
  res.render('charts');
});



module.exports = router;




