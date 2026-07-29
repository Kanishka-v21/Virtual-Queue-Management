const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes =require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");
const queueRoutes = require("./routes/queueRoutes");
const helmet=require("helmet");
const rateLimit=require("express-rate-limit");
dotenv.config();

connectDB();

const app = express();
const limiter=rateLimit({
windowMs:15*60*1000,
max:100
});


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/queue", queueRoutes);
app.use(helmet());
app.use(limiter);

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