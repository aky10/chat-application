const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes");

const app = express();
dotenv.config();
app.use(express.json());
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is connected to db");
  } catch (err) {
    console.log("Server is not connected db", err.message);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is Running"));
