import { useState } from "react";
import "./App.css"
import Book from "./Book";
import Spread from "./Spread";
import Table from "./table";


function App() {
  
  let [number, setNumber] = useState(0
  )
  const increment = () => {
    setNumber(number += 1)
  }
  const decrement = () => {
    setNumber(number -= 1)
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Welcome to Counter
      </h1>
      <h4>
        click + to add <br></br>
        click - to minus   
      </h4>
      <h1 style={{ color:number>0?"green":number==0?"black":"red"}}>{number}</h1>

      <button
        onClick={() => {
          decrement();

        }
        }
        style={{ marginRight: "10px", padding: "14px 14px", borderRadius: "8px", color: "white", fontSize: "large", backgroundColor: "black" }}>-</button>
      <button style={{ marginRight: "10px", padding: "14px 14px", borderRadius: "8px", color: "white", fontSize: "large", backgroundColor: "black" }}
        onClick={() => {
          increment();

        }}>+</button>
        <h4 style={{ color:number>=10?"green":"red"}}>
        {number>=10?"tauheed":"rehman"}
      </h4>
      <Table/>
      {/* <Spread/> */}
        
    </div>

  );
}


export default App;