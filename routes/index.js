var express = require('express');
var router = express.Router();

const dummyBooks = [
  {
    id: "1",
    bookName: "HarryPotter1",
    author: "J.K.Rowling",
    price: "500"
  }, {
    id: "2",
    bookName: "HarryPotter2",
    author: "J.K.Rowling",
    price: "800"
  }, {
    id: "3",
    bookName: "HarryPotter3",
    author: "J.K.Rowling",
    price: "900"
  },
  {
    id: "4",
    bookName: "HarryPotter4",
    author: "J.K.Rowling11",
    price: "9000"
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(dummyBooks);
});

module.exports = router;
