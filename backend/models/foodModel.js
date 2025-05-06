import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,require:true},
    description: {type:String,require:true},
    price: {type:Number,requ:true},
    image: {type:String,requ:true},
    category: {type:String,requ:true},
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)


export default foodModel;