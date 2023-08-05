const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
let db = require("./db.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  let col = await db.collection("products");
  let data = await col.find();
  let js = [];
  for await (let col of data) {
    json = {
      ProductName: col.productName,
      Price: col.price,
      PostedBy: col.postedby,
    };
    js.push(json);
  }
  res.json(js);
});
app.post("/product/add", (req, res) => {});
app.delete("/product/:id", (req, res) => {});
app.put("/product/:id", (req, res) => {});

app.listen(5000, () => {
  console.log("running");
});
