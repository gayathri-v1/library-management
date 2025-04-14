import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {
    const {id} = useParams();
    const [book, setBook] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:8000/book/${id}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.data)
                {
                   setBook(data.data)
               }
               else{
                console.log("book array is not there")
               }
    })
        .catch(err => console.error("cannot find book",err))
    },[id]);
    if (!book) return <p>Loading or book not found...</p>;
  return (
    <div>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.yearOfPublishing}</p>
    </div>
  )
}

export default BookDetails
