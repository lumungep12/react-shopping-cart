const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const shortId = require('shortid');

const app = express();
app.use(bodyParser.json());
// Initialize mongoose database
mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Define product model
const Product = mongoose.model("products", new mongoose.Schema({
    _id: {type: String, default:shortId.generate},
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
}))

// Define first endpoint Getting list of products
app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

// Creating new product in db
app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
});

//Deleting products
app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

const Order = mongoose.model(
    "order",
    new mongoose.Schema(
      {
        _id: {
          type: String,
          default: shortId.generate,
        },
        email: String,
        name: String,
        address: String,
        total: Number,
        cartItems: [
          {
            _id: String,
            title: String,
            price: Number,
            count: Number,
          },
        ],
      },
      {
        timestamps: true,
      }
    )
  );

// ORDER CREATION API
app.post("/api/orders", async (req, res) => {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.address ||
      !req.body.total ||
      !req.body.cartItems
    ) {
      return res.send({ message: "Data is required." });
    }
    const order = await Order(req.body).save();
    res.send(order);
  });
  
  app.get("/api/orders", async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
  });

  app.delete("/api/orders/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Running!! @ http://localhost:5000" )); 
