import React from 'react'
import {useState} from 'react'



const Contact =() =>{
const [firstName, setFirstname] = useState()
const [lastName, setlastName]= useState()
const [phone,setPhone]=useState()
const [day, setDay] = useState()
const [month, setMonth] =useState()
const [year, setYear]= useState()
const [time, setTime] = useState()
const [indoor, setIndoor]= useState()
const [outdoor, setOutdoor]=useState()
const [additional, setAdditional]= useState()



 return (
   
<div className=' bg-amber-600 h-150 w-100 m-50  mt-4'>

<h1 className='ml-30 mt-3 text-3xl text-black '>Contact</h1>

<section className='flex flex-col ml-15  '>

<div className='flex flex-col gap-2 '>

    <label htmlFor="">Firstname</label> 
<input className='border bg-white w-70 ' type="text"  value={firstName} onChange={(event) => setFirstname(event.target.value)} />
{firstName}
</div>

<div className='flex flex-col  gap-2'>
    <label htmlFor="">Lastname</label>
<input className='border bg-white w-70' type="text"  value={lastName} onChange={(event) =>setlastName(event.target.value)}/>
{lastName}
</div>

<div className='flex flex-col gap-2'>
    
    <label htmlFor=""> Phone</label>
<input className='border bg-white w-70' type="tel" value={phone}  onChange={(event) => setPhone(event.target.value)}/>
{phone}
</div>

{/* date */}
<div className=' mt-2  '>


<p className='ml-7'>Day and time</p>

<section className='ml-7  grid grid-cols-4 '>

{/* 1 */}
<div className='flex flex-col'>

<label htmlFor="">Day</label>

<input className='w-15 border bg-white' type="number" min={1} max={31} value={day} onChange={(event) =>setDay(event.target.value)} />

</div>

<div className='flex flex-col'>
    <label htmlFor="">Month</label>
<input className='w-20 border bg-white' type="month" value={month}  onChange={(event) =>setMonth(event.target.value)}/>
</div>
 
<div className='flex flex-col'>

  <label htmlFor="">Year</label>
<input className='w-15 border bg-white' type="number" value={year}  onChange={(event) => setYear(event.target.value)}/>  
</div>

<div className='flex flex-col'>
<label htmlFor="">Time</label>

<input className='w-15 border bg-white' type="time" value={time} onChange={(event) => setTimeout(event.target.value)} />


</div>

</section>

</div>


{/* gender */}

<div className='ml-7  '>

<p className='gap-2'>Seating preference</p>

<section className='flex flex-col gap-0'>

<div className='gap-3'><input className='mr-2' type="radio" value={indoor} onChange={(event) => setIndoor(event.target.value)} />
<label htmlFor="">Indoor</label>
</div>

<div className=''>

    <input className='mr-2' type="radio" value={indoor} onChange={(event) => setOutdoor(event.target.value)} />
<label  htmlFor="">Outdoor</label>
</div>
</section>


</div>

</section>










</div>






    
  )
}
export default Contact