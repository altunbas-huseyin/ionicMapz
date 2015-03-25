var express = require('express');
var router = express.Router();

var data = [
{lat:43.07493, lng:-89.381388, name: "Firma X", address1: "", address2: ""},
{lat:43.04993, lng:-89.441388, name: "Inna firma", address1: "", address2: ""},
{lat:43.03493, lng:-89.531388, name: "FirmaZ", address1: "", address2: ""},
{lat:42.97393, lng:-89.841388, name: "ATO Firma sp zoo", address1: "", address2: ""},
{lat:42.94238, lng:-88.883211, name: "X i Y oraz synowie, oops córki", address1: "", address2: ""},
{lat:42.95321, lng:-88.992839, name: "Chromosom ltd", address1: "", address2: ""}
]
/* GET home page. */
router.get('/', function(req, res) {
  res.json(data);
});

module.exports = router;
