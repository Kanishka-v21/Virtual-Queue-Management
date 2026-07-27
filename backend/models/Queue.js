const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema(
   {
    tokenNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    },
    servicename: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Waiting", "Serving", "Completed", "Cancelled"],
        default: "Waiting",
    },
    estimatedTime: {
        type: Number,
        default: 0,
    },
    joinedAt: {
        type: Date,
    },
},
    { 
        timestamps: true,
    }

);
module.exports = mongoose.model("Queue", queueSchema);