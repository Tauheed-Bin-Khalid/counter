import React, { useState } from 'react'

function Item({ id, text, editcheck, index, Deletetask, EditTask, saveTask, taskDone, editDone }) {
    const [save, setSave] = useState(text)

    return (
            <div key={id} style={{ padding: "10px ", marginBottom: "5px ", marginLeft: "auto", marginRight: "auto", width: "400px", border: "1px solid black", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <input type="checkBox" size="20px" checked={taskDone}
                    onChange={(e) => {
                    console.log(e.target.checked)
                    editDone(index, e.target.checked)
                }} />
            {editcheck ?
                <input style={{ padding: "20px", borderRadius: "10px" }} placeholder="What you need to add" type="text" id="lname" name="lname"
                    value={save}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setSave(e.target.value)
                    }}
                />
                :
                <h3 style={{ margin: "10px 50px", textDecoration: taskDone ? "line-through" : "none" }}>{text}</h3>}
            <button style={{ margin: "10px 30px", color: "white", backgroundColor: "black", borderRadius: "10px" }}
                onClick={() => {
                    Deletetask(id)
                }}
            >Delete</button>
            {editcheck ? <button style={{ margin: "10px 30px", color: "white", backgroundColor: "black", borderRadius: "10px" }}
                onClick={() => {

                    saveTask(index, save);
                }}
            >Save</button>
                :
                <button style={{ margin: "10px 30px", color: "white", backgroundColor: "black", borderRadius: "10px" }}
                    onClick={() => {

                        EditTask(index)
                    }}
                >Edit</button>

            }
        </div>
    )
}

export default Item