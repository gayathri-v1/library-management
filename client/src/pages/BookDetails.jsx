import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {
    const {id} = useParams();
    const [book, setBook] = useState();
    useEffect(()=>{
        fetch(`http://localhost:8000/book/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log("bookdetails",data)
            setBook(data.data)
    })
        .catch(err => console.error("cannot find book",err))
    },[id]);

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
