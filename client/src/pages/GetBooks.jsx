import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FindBookById from './FindBookById';

function GetBooks() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    
    
    useEffect(()=>{
            fetch('http://localhost:8000/book')
            .then(res => res.json())
            .then(data => {
                
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
            setBooks(books.filter(book => book._id !== id))
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
    <div className='p-20'>

    <div className='bg-blue p-10 ml-70 gap-5 flex flex-col '>
      <h2 className='text-4xl'>Books available in the library</h2>
      <FindBookById />
      <button onClick={goToAddBookForm}>Add books</button>
      
      <ul>
      {
        books.map(book =>(
            
            <li key={book._id} className='flex flex-row gap-3 bg-white p-10'>
                <strong>{book.title} </strong> by {book.author} ({book.yearOfPublishing}) - {book.genre}
                <button onClick={() => navigate(`/edit/${book._id}`)}>Edit</button>
                <button onClick={()=> handleDelete(book._id)}>Delete</button>
            </li>
            
            
        )) 
      }
      </ul>
    </div>
    </div>
  )
}

export default GetBooks
