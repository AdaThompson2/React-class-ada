import React from 'react'


const NameList = [
"John", "Ada" ,"chima",

"Etim", "Jane" , "Gideon",
"Boma" ,"Biacan",

]



 function Search() {
  
  
  
    return (
    <div>

    <input type="text"  placeholder='Search...'/>  

    {NameList.map((name, index) => {

return <p key = {index} >{name}</p>


}


) }  
    </div>
  )
}

export default Search