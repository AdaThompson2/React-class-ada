import './App.css'
import Navbar from "./component/Navbar"
import About from "./component/About"
import Home from "./component/Home"
import Service from "./component/Service"
import Faq from './component/Faq'
import { Routes, Route} from "react-router-dom"
import Footer from './component/Footer'
import PageNotFound from './component/PageNotFound'
import Todo from './component/Todo'
// import Compliment from './component/compliment'
import Contact from './component/Contact'
import Search from './component/Search'
// import Fetchdata from './component/Fetchdata'
import Fetchpost from './component/Fetchpost'



// const name= "chima"
// const age= 30
// const Gender = "male"



function App() {
 

  return (
    // <div>

    //  <h1>My name is {name} and I am {age}</h1>
    // </div>

    <div >
      <Navbar/>
      <Contact/>
      <Search/>
      {/* <Fetchdata/> */}
       <Fetchpost/>
    

      <Routes>
      
      <Route path='/' element ={<Home/>}/> 
      
      <Route path='/Faq'  element = {<Faq/>}/>

      <Route path='/About' element = {<About/>}/>

      <Route path='/Service'element = {<Service/>}/>

      <Route path='*' element ={<PageNotFound />}/>
      {/* <Route path='Contact' element = {<Contact/>}/> */}

     

      </Routes>

       <Todo/>

     <Footer/>
     

    
     {/* <Compliment/> */}
   

    </div>
  )
}

export default App
// always start with capital later for a component
// App.jsx- it can perform javascript and Html together and css , all in one together.
// read properities(props), react router, and state

// props
// React
// 


