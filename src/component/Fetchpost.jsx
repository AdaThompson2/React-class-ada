import React from 'react'
import { useState, useEffect } from 'react'


export default function Fetchpost() {
  
  const[data,setData] = useState([])
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
  useEffect(()=> {

fetch('https://jsonplaceholder.typicode.com/albums')
     .then((get)=>get.json())
.then((result)=>setData(result))
    
    }, [])
  
   
  return (
    <div>

        {data.map((albums)=>{

        return(
            <div key={albums.id}>

                <h1 className='text-2xl'>Albums</h1>
          
                <h1 className=''>{albums.userId}</h1>
                <p>{albums.title}</p>
               

            </div>


        )


        })}




    </div>
  )
}
