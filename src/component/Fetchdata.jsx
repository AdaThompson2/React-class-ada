// import React from 'react'
// import { useState} from 'react'
// import { useEffect } from 'react'

// export default function Fetchdata() {
    

// const [data, setData] = useState([]);

// useEffect ( () =>{

// fetch('https://jsonplaceholder.typicode.com/users').then((get)=>get.json())
// .then((result)=>setData(result))

// }, [])


//   return (
//     <div>
//           {data.map((users) => {
// return(
// <div key={users.id}>
// <h1 className='gap-5 text-2xl text-orange-500'>{users.name}</h1>
// <p>{users.username}</p>
// <p>{users.email}</p>
// <h1>{users.address.street}</h1>
// <h1>{users.address.suite}</h1>
// <p>{users.address.city}</p>
// <h1>{users.address.zipcode}</h1>
// <p>{users.address.geo.lat}</p>
// <p>{users.address.geo.lng}</p>
// <p>{users.phone}</p>
// <p>{users.website}</p>

// </div>



// )

// })}


// </div> 
// )
// }











// const Fetchdata = () => {
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true)

// useEffect(() => {


// // const Fetchdata = () => {

// // fetch('https://jsonplaceholder.typicode.com/photos')
// //       .then(response => response.json())
// //       .then(json => console.log(json))


// const FetchData = async () => {

// try{

// const response = await fetch('https://jsonplaceholder.typicode.com/photos');
// const result = await response.json();
// setData(result);

// }

// catch (error) {
// console.error('Error fetching data:', error);
// setLoading(false)


// }


// }

// Fetchdata()
// } , []);

// if (loading) {

// return <div>Loading...</div>




// }



  
//     return (
//     <div>

// <h2>
// Fetch data
// </h2>

// <ul>

// {data?.map((item) => {
//    <li key = {item.id}>{item.title}</li> 
  
// })}

// </ul>
//     </div>
  


// )

// }

// export default Fetchdata() 

// Query
// Mutation
// Tanstack Query previusly called React Query:

// Query - Fetching - Get
//  Mutation - Create - Post
// update - put - patch
// delete - delete
// get axios 
// post axious
// put axious
// useState - To store and manage data
// UseEffect- To change the state of the data automatically.
// Is to create a Usestate

// const [data, setData]
// data- where the information is stored/ 
// more like a variable and a function that changes the state
// setData - use to change the state eg from string to number or null

// Mutation


