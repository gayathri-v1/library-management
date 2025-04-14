
import './App.css'
// import AddBookForm from './pages/AddBookForm'
import AddBookForm from './pages/AddBookForm'
import BookDetails from './pages/BookDetails'
import EditBooks from './pages/EditBooks'
// import FindBookById from './pages/FindBookById'
import GetBooks from './pages/GetBooks'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    
      <Routes>
        <Route path="/" element={<GetBooks />} />
        <Route path = "/add" element={<AddBookForm />} />
        <Route path="/edit/:id" element = {<EditBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
   
  )
}

export default App
