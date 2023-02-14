import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';




import './Add.css'


/* A function that is used to add the details of the user. */
function Add() {
    const [postImage, setPostImage] = useState( { img : ""})
    const [input,setInput]=useState({
        name: "",
        age: "",
        genre: "Hindu",
        gender: "",
        contact: "",
        img: "https://image.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg",
    })

    function handleChange(event){
        const{name,value}=event.target;

        setInput(prevInput=>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }
    const history = useNavigate();
   /**
    * It takes the data from the form and sends it to the server
    * when an event
    * occurs on the element.
    */
    function handleClick(event){
        event.preventDefault();
        
        const newData={
        name: input.name,
        age: input.age,
        genre: input.genre,
        gender: input.gender,
        contact: input.contact,
        img:input.img,
        }

        if(!input.name|| !input.age|| !input.genre||!input.gender|| !input.contact){
            alert("Please provide data");
        }
        else{
            axios.post('http://localhost:8081/api/add',newData).then(()=>{
                setInput({name:"",age:"",genre:"",gender:"",contact:""});
            })
            setTimeout(()=> history('/home'),500);
        }

    }
    

  return (
    <div className='wrapper'>
        
    {/* /*  The form for the user to enter the details. */ }
    <div className='forms'>
        <h3>Enter Your Details</h3>
        <form id='myForm'>
           <div>
                <p>Name :</p>
                <input onChange={handleChange} name='name' value={input.name} placeholder='Name'/>
           </div>
           <div>
           <p>Year of Birth :</p>
                <input onChange={handleChange} name='age' value={input.age} placeholder='Year of Birth'/>
            </div>
           
            <div> 
            <p>Contact Number :</p>
                <input onChange={handleChange} name='contact' value={input.contact} placeholder='Contact'/>
            </div>
            
            <div> 
            <p>Gender :</p>
                <input onChange={handleChange} name='gender' value={input.gender="Male"} type="radio"/>Male
                <input onChange={handleChange} name='gender' value={input.gender="Female"} type="radio"/>Female
            </div>

            <div>
            <p>Religion :</p>
            <select onChange={handleChange} id="genre" name='genre' value={input.genre} placeholder='Religion' >
                <option value="Hindu">Hindu</option>
                <option value="Christain">Christain</option>
                <option value="Jain">Jain</option>
                <option value="Muslim">Muslim</option>
            </select>
            </div>

           
           <button onClick={handleClick}>Submit Data</button>
           
            
          
           
        </form>
    </div>

    </div>
  )
}

export default Add

