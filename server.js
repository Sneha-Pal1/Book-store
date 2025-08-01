require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//connect to database
const connectDB = require("./database/db");
connectDB();

//middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
