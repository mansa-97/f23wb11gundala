var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    let query = req.query;
    console.log(`rows ${query.rows}`);
    console.log(`cols ${query.cols}`);
    var rows=Number(query.rows);
    var cols=Number(query.cols);
    res.render('board', { title: 'Board', query: query });
  });
  
module.exports = router;
