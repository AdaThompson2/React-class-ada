import React, { useEffect } from 'react'

export default function Create() {
  
  

    useEffect(()=> {

   fetch( 'https://jsonplaceholder.typicode.com/posts', {

method:'POST',

headers: {


    'content-Type' : 'application/json'
},

body: JSON.stringify({
title: 'foo',
body: 'bar', 
userId: 1


})




   })
    

   
   
   
    },[])
  
  
    return (
    <div>Create</div>
  )
}
