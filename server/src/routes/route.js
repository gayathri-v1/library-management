// const {httpAddNewBook,httpDeleteBook, httpGetAllBooks, httpGetOneBook, httpUpdateBook}= require('./controller')
const {deleteBookDb,addNewBookDb,updateBookDb,getAllBooksDb,getOneBookDb} = require('./controllerDb')
const express = require("express");

// const bookRouter = express.Router();

// bookRouter.get('/',httpGetAllBooks)
// bookRouter.post('/',httpAddNewBook)
// bookRouter.get('/:id',httpGetOneBook)
// bookRouter.put('/:id',httpUpdateBook)
// bookRouter.delete('/:id',httpDeleteBook)

const router = express.Router();

router.route("/").get(getAllBooksDb).post(addNewBookDb);
router.route("/:id").get(getOneBookDb).delete(deleteBookDb).put(updateBookDb);


// module.exports = bookRouter

module.exports = router