import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditBooks() {
  const [inputs, setInputs] = useState({})
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
      fetch(`http://localhost:8000/book/${id}`)
      .then(res => res.json())
      .then(data => {
        setInputs(data.data)})
      .catch(err => console.log("Failed to fetch books",err))
  },[id])

  const handleChange = (e)=>{
      const {name, value} = e.target;
      setInputs(prev => ({...prev, [name]:value}))
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await fetch(`http://localhost:8000/book/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });
      if(response.ok){
        console.log("Book updated successfully")
        navigate('/')
      }
      else{
        console.error("failed to update book")
      }
    }
    catch(err){
      console.error("Error updating book:", err);
    }


  }

  return (
    <form onSubmit={handleSubmit}>
    <h2>Edit Book</h2>
    <label>Title of the book: </label>
    <input 
      type='text'
      name = "title"
      value={inputs.title ||""}
      onChange={handleChange}
      ></input>
    <label>Author: </label>
    <input 
      type='text'
      name = "author"
      value={inputs.author ||""}
      onChange={handleChange}
      >

      </input>
    <label>Genre: </label>
    <input 
      type='text'
      name = "genre"
      value={inputs.genre ||""}
      onChange={handleChange}
      ></input>
    <label>Year of Publishing: </label>
    <input 
      type='number'
      name = "yearOfPublishing"
      value={inputs.yearOfPublishing ||""}
      onChange={handleChange}
      ></input>
      <button type="submit">Update </button>
    

    </form>
  )
}

export default EditBooks
