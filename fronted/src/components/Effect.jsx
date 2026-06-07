import React, { useEffect, useState } from 'react'

const Effect = () => {
    const[count,setCount]=useState(0);

    //useEffect(callBack function, dependency array);
    //useEffect(()=>{},[]);

    useEffect(()=>{
        console.log("Component Re-render")
    },[])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Effect
