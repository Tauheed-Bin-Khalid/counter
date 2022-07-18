import {  useState, useRef, useEffect } from "react";
import "./App.css"
import Book from "./Book";
import Counter from "./Counter";
import Spread from "./Spread";
import Table from "./table";
// import UEffect from "./UEffect";


function App() {
  
const [userlist, setUserlist] = useState([])
useEffect(
  ()=>{
    xyz();
  },[]
);
const xyz=async()=>{
  const data = await fetch('https://api.github.com/users')
    const resp = await data.json
    console.log(resp)
    setUserlist(resp)
}
  
 
  return (
    <>
     <h1>
      hello
     </h1>
     {userlist.map((user)=>{
      const {id,login,avatar_url,html_url} = user
      return(
        <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
            <h4>
              {login}
            </h4>
          </div>
        </li>
      )
     })

     }
    </>

  )
}


export default App;