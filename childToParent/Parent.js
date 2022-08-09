import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [store,setStore] = useState([]);
  const getData= (val) =>{
   setStore(val)
   console.log(val,"parent")
  };
  console.log(store,"STORE")
  return (
    <div>
     <Child data={getData} />
     <h1>{store.name}</h1>
     <p>{store.email}</p>
    </div>
  )
}

export default Parent