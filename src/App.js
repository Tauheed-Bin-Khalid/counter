import { useState, useRef, useEffect } from "react";
import "./App.css"
import Book from "./Book";
import Counter from "./Counter";
import Item from "./Item";
import Spread from "./Spread";
import Table from "./table";
// import UEffect from "./UEffect";


function App() {
  const [task, setTask] = useState('')

  const [todolist, setTodolist] = useState([
    { id: 1, text: 'task1', editcheck: false, taskDone: false },
    { id: 2, text: 'task2', editcheck: false, taskDone: false },
    { id: 3, text: 'task3', editcheck: false, taskDone: false },

  ])

  const Addtask = () => {
    if (task.length > 0) {
      setTodolist([...todolist, { id: todolist.length + 1, text: task, editcheck: false, taskDone: false }])
      setTask("")
    }
  }
  const Deletetask = (id) => {
    // setPeople(people.filter((data)=>id!=data.id))
    setTodolist(todolist.filter((list) => id != list.id))
   
  }
  const Edittask = (index) => {
    let array = [...todolist]
    array[index].editcheck = true;
    setTodolist(array);
  }
  const editDone = (index, value) => {
    let array = [...todolist]
    array[index].taskDone = value;
    setTodolist(array);
  }

  const saveTask = (index, newText) => {
    let array = [...todolist]
    array[index].text = newText;
    array[index].editcheck = false;
    setTodolist(array);
  }

  return (
    <div style={{ textAlign: "center", margin: " 100px auto" }}>
      <h1>ToDo List</h1>

      <input style={{ padding: "20px", borderRadius: "10px" }} placeholder="What you need to add" type="text" id="lname" name="lname"
        value={task}
        onChange={(e) => {
          console.log(e.target.value)
          setTask(e.target.value)
        }}
      />
      <button style={{ marginLeft: "10px", padding: "10px 30px", color: "white", backgroundColor: "black", borderRadius: "10px" }}
        onClick={() => {
          Addtask()
        }}
      >Add</button>
      <div style={{ marginTop: "20px" }}>
        {
          todolist.map(({ id, text, editcheck, taskDone }, index) => {
            return (
              <Item id={id} index={index} text={text} editcheck={editcheck} taskDone={taskDone} Deletetask={Deletetask} EditTask={Edittask} saveTask={saveTask} editDone={editDone} />
            )
          })
        }
      </div>
      <br></br>
    </div>

  )
}


export default App;