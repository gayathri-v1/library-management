const {getAllBooks , getOneBook, addNewBook, updateBook, deleteBook
}= require('../model/modelDb')

const getAllBooksDb = async (req,res) => {
    try {
        const books = await getAllBooks();
        res.json({ data: books, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};

const getOneBookDb = async (req,res) =>{
    try{
        const book = await getOneBook(req.params.id)
        res.json({data:book, status:"success"})
    }
    catch(err){
        res.status(500).json({err:err.message})
    }
}

const addNewBookDb = async(req, res) =>{
    try{
        const book = await addNewBook(req.body)
        res.json({data:book, status:"success"})
    }
    catch(err){
        res.status(500).json({err:err.message})
    }
}

const updateBookDb = async(req, res) =>{
    try{
        const book = await updateBook(req.params.id, req.body)
        res.json({data:book, status:"success"})
    }
    catch(err){
        res.status(500).json({err:err.message})

    }
}
const deleteBookDb = async(req, res) =>{
    try{
        const book = await deleteBook(req.params.id)
        res.json({data:book, status:"success"})

    }
    catch(err){
        res.status(500).json({err:err.message})

    }
}

module.exports = {deleteBookDb,addNewBookDb,updateBookDb,getAllBooksDb,getOneBookDb}