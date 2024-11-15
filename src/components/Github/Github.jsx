import React, { useEffect, useState } from 'react'

export default function Github() {
   const[data,setdata]=useState([]);
    useEffect(()=>{
    fetch('https://api.github.com/users/yuvknightt')
    .then(response=>response.json())
    .then(data => {console.log(data);
     setdata(data);}
    )
  }, []
  )
  return (
    <>
     <h1 className='text-gray-200 text-center m-4 text-red-600'>Github Followers : {data.followers}</h1> 
    <img src={data.avatar_url}/>
    </>
  )
}
