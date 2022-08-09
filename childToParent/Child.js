import React, { useState } from 'react'

const Child = (props) => {
 const[name,setName]= useState('');
const[email,setEmail]= useState('');
const[object,setObject]= useState({});


  const errObject ={};
  
  const runValidator =()=>{
    if (name.length === 0) {
      errObject.name = "name should not be empty"
    }
    if (email.length === 0 ){
       errObject.email = "email not be empty"
    }
  }

 const handleSubmit = ((e) =>{
   e.preventDefault();
    runValidator()

    if(errObject.length === 0){
      const payload = {
        name:name,
        email:email
       }
       setEmail('')
       setName('')
       console.log(payload,'all datas in child')
    
       props.data(payload) 
    } else {
      setObject(errObject)
    }

 }
 )

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <span style={{color:'red'}}>{object.name}</span>
      
       <div>
       <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <span style={{color:'red'}}>{object.email}</span>
       </div>
       </div>
        <button type='submit'>click me</button>
      </form>
    </div>
  )
}

export default Child