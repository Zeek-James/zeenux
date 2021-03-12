const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/transactions", transactions);

const port = process.env.PORT || 5500;

app.listen(port, console.log(`Server logged on port: ${port}`));
