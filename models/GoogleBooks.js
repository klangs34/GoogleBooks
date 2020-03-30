const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = Promise;

const GoogleBooksSchema = new Schema({
    googleID: {
        type: String
    },
    title: {
        type: String,
        trim: true,
        required: "Title is required"
    },
    authors: {
        type: [],
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: "Description is required"
    },
    image: {
        type: String,
        trim: true,
        required: "Image is required"
    },
    link: {
        type: String,
        trim: true,
        required: "Link is required"
    },
    
});

const GoogleBooks = mongoose.model("GoogleBook", GoogleBooksSchema);

module.exports = GoogleBooks;