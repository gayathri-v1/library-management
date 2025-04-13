
import './App.css'
// import AddBookForm from './pages/AddBookForm'
import AddBookForm from './pages/AddBookForm'
import GetBooks from './pages/GetBooks'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    
      <Routes>
        <Route path="/" element={<GetBooks />} />
        <Route path = "/add" element={<AddBookForm />} />
      </Routes>
   
  )
}

export default App
