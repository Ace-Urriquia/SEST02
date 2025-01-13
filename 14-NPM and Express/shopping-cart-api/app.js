const express = require("express");
const app = express();
const port = 3000;

const products = require("./products");
const cartItems = require("./cart");

//Middleware
app.use(express.json());

function generateUniqueIdCart() {
  if (cartItems.length === 0) {
    return 1; 
  }
  const lastCartObject = cartItems[cartItems.length - 1]; 
  return lastCartObject.id + 1; 
}

app.get("/cart", (request, response) => {
  if (cartItems.id === 0) {
    response.status(404).json({ message: "Cart item is empty!" });
  }
  response.json(cartItems);
});

app.get("/cart/:cartId", (request, response) => {
  const cartId = parseInt(request.params.cartId);
  const cartItem = cartItems.find((cartObject) => cartObject.id === cartId);
  if (cartItem) {
    response.json(cartItem);
  } else {
    response.status(404).json({ message: "Cart Item is not found!" });
  }
});

app.post("/cart", (request, response) => {
  const name = request.body.name;
  const price = request.body.price;
  const qty = request.body.qty;

  if (!name || !price || !qty) {
    return response
      .status(404)
      .json({ message: "Name, Price and Qty is Required" });
  }
  const newCart = {
    id: generateUniqueIdCart(),
    name,
    price,
    qty,
  };
  cartItems.push(newCart);
  return response
    .status(201)
    .json({ message: "Product Successfully added to the list" });
});

app.delete("/cart/:cartId", (request, response) => {
  const cartId = parseInt(request.params.cartId);

  const cartIndex = cartItems.findIndex(
    (cartObject) => cartObject.id === cartId
  );

  if (cartIndex !== -1) {
    cartItems.splice(cartIndex);
    response.status(200).json({ message: "Product deleted successfully" });
  } else {
    response.status(404).json({ message: "product not found" });
  }
});

// app.get()
// app.post()
// app.put()
// app.delete()

//this will return products array and cartItems array
// console.log("Procuts:",products);
// console.log("Cart:",cartItems);

//.get() Accept Route / URL, Callback(Route Handler)
app.get("/products", (request, response) => {
  //Status code 200 = means successfull
  response.status(200).json(products);
});

// Route Parameter: placeholder
app.get("/products/:productID", (request, response) => {
  // Check: int.parse
  const productID = parseInt(request.params.productID);
  // create a test condition, the first element passed the test condition will be return
  const product = products.find(
    (productObject) => productObject.id === productID
  );
  if (product) {
    // If there is a match, return the product Object.
    response.json(product);
  } else {
    // Return an error and tell the user the product is not found.
    response.status(404).json({ message: "Product not found" });
  }
});

function generateUniqueID() {
  if (products.length === 0) {
    // No product object inside of the products array.
    return 1;
  }
  const lastProductObject = products[products.length - 1];
  return lastProductObject.id + 1;
}

// .post(Route/URL, Callback(Route Handler))
app.post("/products", (request, response) => {
  // This will return the same value as destructuring objects.
  // const name = request.body.name;
  // const price = request.body.price;
  const { name, price } = request.body;

  if (!name || !price) {
    return response.status(400).json({ message: "Name and price is required" });
  }
  const newProduct = {
    id: generateUniqueID(),
    name,
    price,
  };

  products.push(newProduct);

  response.status(201).json({ message: "Product added to the product list." });
});

app.put("/products/:productId", (request, response) => {
  const productId = parseInt(request.params.productId);
  const { name, price } = request.body;

  if (!name || !price) {
    return response.status(400).json({ message: "Name and price is required" });
  }
  const product = products.find(
    (productObject) => productObject.id === productId
  );

  if (product) {
    product.name = name;
    product.price = price;
    response.status(200).json({ message: "Product updated successfully." });
  } else {
    response.status(404).json({ message: "Product not found" });
  }
});

app.delete("/products/:productId", (request, response) => {
  const productId = parseInt(request.params.productId);

  const productIndex = products.findIndex(
    (productObject) => productObject.id === productId
  );
  if (productIndex !== -1) {
    // .splice(start, deleteCount?, element/s)
    products.splice(productIndex, 1);
    response.status(200).json({ message: "Product deleted successfully" });
  } else {
    response.status(404).json({ message: "Product not found" });
  }
});

// 1. Add a new product object to the cartItems array.
// 2. Delete a product Object from the cartItems array.
// 3.

app.listen(port, () => {
  console.log(`Server Listening on port: ${port}...`);
});

//Run the express app
// 1. open "/shopping-cart-api" in the terminal
// 2. node "name of main file. (app.js)"
// 3. restart the server everytime there is a change.

// Nodemon
// 1. Open "/shopping-cart-api" in the terminal.
// 2. nodemon "name of main file.(app.js)"
// 3. This will automatically refresh the server everytime there is a change.
