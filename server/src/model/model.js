const books = new Map();

let id=1;

const book = {
    "id" : 1,
    "title" : "Tuesday with Morrie",
    "author" : "Mitch albun",
    "genre":"philosophy",
    "publication Year": 1997
    
}
//initialize the above data in map

books.set(book.id,book);

//return true if book exists
function existBook(id){
    return books.has(id)
}

//get all books

function getAllBooks(){
    return Array.from(books.values())
}

//get one book

function getOneBook(id){
    return books.get(id);
}

//create book

function addNewBook(newBook){
    id++;
    const bookAdd= {
        id: id,
        ...newBook,
    }
    books.set(id, bookAdd);
    return bookAdd;
}

// update and edit the book

function updateBook(id, updatedBook){
    const targetBook = books.get(id);
    if(targetBook){
        Object.assign(targetBook, updatedBook)
        return targetBook
    }
    return null;
}

//delete the book

function deleteBook(id){
    return books.delete(id);
}

module.exports = {existBook , getAllBooks, getOneBook, addNewBook, updateBook, deleteBook}