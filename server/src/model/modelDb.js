
const mongoose = require("mongoose");
// const { getAllBooks, getOneBook, addNewBook, updateBook, deleteBook } = require("./model");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  yearOfPublishing: Number,
});

const BookNew = mongoose.model("BookNew",bookSchema) 
//create the services

const getAllBooks = async()=>{
    return await Book.find();
}
const getOneBook = async(id)=>{
    return await Book.findById(id)
}

const addNewBook = async(book)=>{
    return await Book.create(book)

}

const updateBook = async(id, book) => {
    return await Book.findByIdAndUpdate(id, book)
}
const deleteBook = async(id) => {
    return await Book.findByIdAndDelete(id);
}

module.exports = {getAllBooks , getOneBook, addNewBook, updateBook, deleteBook}



