require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Connect to the MongoDB Cluster
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.info(
        `Listening on port ${process.env.PORT} and connected to MongoDB Atlas.`
      );
    });
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  });
