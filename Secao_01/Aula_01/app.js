console.log("Gerenciador Financeiro");

var client = "Danilo Borges";

var valProduct = 100;
var valDiscount = 25;



var discount = require("./module/discount");

var result = discount(valProduct, valDiscount);

console.log(result);