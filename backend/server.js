const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const queueRoutes = require("./routes/queueRoutes");

const { protect } = require("./middleware/authMiddleware");


dotenv.config();


connectDB();


const app = express();
app.set("trust proxy", 1);


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});


// Middlewares

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(helmet());

app.use(limiter);



// Routes

app.use("/api/auth", authRoutes);
app.use("/api/queue", queueRoutes);

// Test Route

app.get("/", (req, res) => {

    res.send("Queue Management API Running");

});



// Profile Route

app.get("/api/profile", protect, (req, res) => {

    res.json(req.user);

});



const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});