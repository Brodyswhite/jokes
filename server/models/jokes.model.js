const mongoose = require ('mongoose');


const JokesSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be at least 5 characters"]
    },
    cogs : {
        type: Number,
        required:[true, "Number of cogs is required"],
        max:[10,"Too many cogs"]
    }
},{timestamps:true})

const Jokes = mongoose.model("Jokes",JokesSchema);

module.exports = Jokes;