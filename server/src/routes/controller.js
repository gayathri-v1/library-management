const {existBook , getAllBooks, getOneBook, addNewBook, updateBook, deleteBook} = require('../model/model')

function httpGetAllBooks(req,res){
    return res.status(200).json(getAllBooks())
}

function httpGetOneBook(req, res){
    const bookId = Number(req.params.id)
    if(!existBook(bookId)){
        return res.status(404).json({
            error: "Book not found"
        })
    }
    return res.status(200).json(getOneBook(bookId));

}

function httpAddNewBook(req,res){
    const book = req.body
    const savedBook = addNewBook(book);
    return res.status(201).json(savedBook);
}

function httpUpdateBook(req,res){
    const bookId = Number(req.params.id)
    const updatedBook = req.body
    if(!existBook(bookId)){
        return res.status(404).json({
            error: "Book not found"
        })
    }
    const updated = updateBook(bookId, updatedBook)
    if(updated){
        return res.status(200).json(updated)
    }
    else{
        return res.status(500).json({
            error: "Failed to update book",
          });
    }
}

function httpDeleteBook(req, res){
    const bookId = Number(req.params.id)
    if(!existBook(bookId)){
        return res.status(404).json({
            error: "Book not found"
        })
    }
        const deletedBook = deleteBook(bookId)
        return res.status(200).json(deletedBook)
    
}

module.exports= {httpAddNewBook,httpDeleteBook, httpGetAllBooks, httpGetOneBook, httpUpdateBook}