import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function GetBooks() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
            fetch('http://localhost:8000/book')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data 👇👇");
                console.log(data); // 👈 see exactly what you're getting
                console.log("Type of data:", typeof data);

                if (Array.isArray(data.data))
                     {
                        setBooks(data.data)
                    }
                else{
                    console.error("Expected array, got:", data.data);
                    setBooks([]);
                }
            })
            .catch(err => console.log("Error fetching books", err))
    },
        [])

    const handleDelete = async(id)=>{
    try{
        const res = await fetch(`http://localhost:8000/book/${id}`,{
            method:'DELETE'
        });
        if(res.ok){
            setBooks(books.filter(book => book.id !== id))
            console.log(books);
        }
        else{
            console.log("Failed to delete");
        }
    }
    catch(err){
        console.log(err)
    }
}
const goToAddBookForm = ()=>{
    navigate("/add");
}

  return (
    <div>
      <h3>Books available in the library</h3>
      <button onClick={goToAddBookForm}>Add books</button>
      <ul>
      {
        books.map(book =>(
            
            <li key={book._id}>
                <strong>{book.title} </strong> by {book.author} ({book.yearOfPublishing}) - {book.genre}
                {/* <button onClick={}>Edit</button> */}
                <button onClick={()=> handleDelete(book._id)}>Delete</button>
            </li>
            
            
        )) 
      }
      </ul>
    </div>
  )
}

export default GetBooks
