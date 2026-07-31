const mongoose = require("mongoose");


const queueSchema = new mongoose.Schema(

{

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    tokenNumber:{
        type:Number,
        required:true,
        unique:true
    },


    customerName:{
        type:String,
        required:true
    },


    customerEmail:{
        type:String,
        required:true
    },


    serviceName:{
        type:String,
        required:true
    },


    status:{
        type:String,
        enum:[
            "Waiting",
            "Serving",
            "Skipped",
            "Completed",
            "Cancelled"
        ],
        default:"Waiting"
    },


    estimatedTime:{
        type:Number,
        default:10
    },


    joinedAt:{
        type:Date,
        default:Date.now
    }

},

{
    timestamps:true
}


);


module.exports = mongoose.model(
    "Queue",
    queueSchema
);