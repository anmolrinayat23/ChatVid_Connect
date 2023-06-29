var express = require('express');
var router = express.Router();
var {v4:uuidv4}=require('uuid');
  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(`/${uuidv4()}`);
});

router.get('/:room', function(req, res, next) {
  res.render('index',{roomId:req.params.room});
});
module.exports = router;
