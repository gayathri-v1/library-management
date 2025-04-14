import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddBookForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({})
  const [showForm, setShowForm] = useState(true);
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);

    try{
        const response = await fetch('http://localhost:8000/book',{
          method:"POST",
          headers:{
            "content-Type":"application/json"
          },
          body:JSON.stringify(inputs)
        });
        if (response.ok){
          console.log("Books added succesfully")
          setInputs({});
          setShowForm(false);
          navigate("/")
        }
        else{
          console.error("Failed to add books")
        }

    }
    catch(error){
      console.error("Error",error)
    }
    console.log(inputs); //show that in main page
  }
  return (
    <>
    {showForm && (
    <form onSubmit={handleSubmit} className='bg-pink-200 p-20 flex flex-col w-2xl ml-110 mt-50'>
      <label>Title of the book: </label>
      <input 
      type='text'
      name = "title"
      value={inputs.title ||""}
      onChange={handleChange}
      className='bg-white'
      ></input>

      <label>Author: </label>
      <input 
      type='text'
      name = "author"
      value={inputs.author ||""}
      onChange={handleChange}
      className='bg-white'
      ></input>
      
      <label>Genre: </label>
      <input 
      type='text'
      name = "genre"
      value={inputs.genre ||""}
      onChange={handleChange}
      className='bg-white'
      ></input>
      <label>Year of Publishing: </label>
      <input 
      type='number'
      name = "yearOfPublishing"
      value={inputs.yearOfPublishing ||""}
      onChange={handleChange}
      className='bg-white'
      ></input>
      <button type="submit" 
        className='p-1.5 mt-2'
      >Submit</button>
    </form>
    )}
    </>
  )
}

export default AddBookForm
