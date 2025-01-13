const productsModule = require("./products");
const cartModule = require("./cart");

//this will happen if you dont prevent the access for the variables
// the user can manipulate the variable directly
// console.log(productsModule.products);
// console.log(productsModule.products[0].price = 10);

//check the available product
productsModule.displayProducts();

//check the cart of the user
cartModule.displayCartItems();
//console.log(productsModule.getProduct(3));


// add a product to the cart
cartModule.addToCart(productsModule.getProduct(3));
cartModule.addToCart(productsModule.getProduct(2));

//check the cart of the user
cartModule.displayCartItems();

// Calculate total price of products in the cart
cartModule.calculateTotal();
console.log(cartModule.calculateTotal());