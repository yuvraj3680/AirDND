import React,{useState}from 'react'
//import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
  const[data, setData]=useState({
    name:'',
    email:'',
    password:'',
    Cpassword:''
  });

  const handleChange=(e)=>{
   const {name,value}=e.target;
   setData({
    ...data,
    [name]:value
   }) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
       User Name:
       <input type='text' name='name'value={data.name} onChange={handleChange} />
      </label>
      <label>
       User Email:
       <input type='email' name='email' value={data.email} onChange={handleChange}/>
      </label>
      <label>
       Password:
       <input type='password' name='password'value={data.password} onChange={handleChange}/>
      </label>
      <label>
       Confirm Password:
       <input type='password' name='Cpassword' value={data.Cpassword} onChange={handleChange}/>
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Login
