import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function FindBookById() {
        const [query,setQuery] = useState('');
        const navigate = useNavigate();
    const handleSearch= (e)=>{
        e.preventDefault();
        console.log("search submit")
        if(query.trim()!== ""){
            console.log(query.trim())
            navigate(`/book/${query.trim()}`);
            console.log("navigate success")
        }    
        else{
            alert("Please enter book id");
        }   
    }
  return (
    <form onSubmit={handleSearch} className='flex flex-row gap-3'>
        <label>Search book</label>
        <input type='text'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            className='bg-white'
        />
        <button type='submit'>search</button>
      </form>
  )
}

export default FindBookById
