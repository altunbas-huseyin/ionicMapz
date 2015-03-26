var express = require('express');
var router = express.Router();

var data = [
{lat:43.07493, lng:-89.381388, name: "Firma X", city:"Warszawa", address1: "", address2: ""},
{lat:43.04993, lng:-89.441388, name: "Inna firma", city:"Warszawa", address1: "", address2: ""},
{lat:43.03493, lng:-89.531388, name: "FirmaZ", city:"Poznań", address1: "", address2: ""},
{lat:42.97393, lng:-89.841388, name: "ATO Firma sp zoo", city:"Wrocław", address1: "", address2: ""},
{lat:42.94238, lng:-88.883211, name: "X i Y oraz synowie, oops córki", city:"Poznań", address1: "", address2: ""},
{lat:42.95321, lng:-88.992839, name: "Chromosom ltd", city:"Rzeszów", address1: "", address2: ""}
]
/* GET home page. */
router.get('/', function(req, res) {
	res.set('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.json(data);
});

module.exports = router;
