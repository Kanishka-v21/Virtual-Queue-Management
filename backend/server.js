const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes =require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Queue Management API Running");
});
app.get("/api/profile")
const PORT = process.env.PORT || 5000;

app.get("/api/profile", protect, (req, res) => {
    res.json(req.user);
});

app.listen(PORT, () => {
    console.log(`server Running on port ${PORT}`);
});