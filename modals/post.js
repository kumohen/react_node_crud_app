const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    created: {
        type: Date,
        default: Date.now}
})

const ModelClass = mongoose.model("post",postSchema);

module.exports = ModelClass;