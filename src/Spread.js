import React, { useState } from 'react'

function Spread() {
    const [person, setPerson] = useState({
        name:'tauheed',
        age:33,
        message:'right',
    });
const changeMessage=()=>{
    setPerson({...person,message:'wrong',age:1})
}

  return (
    <div>Spread
        <h3>{person.name}
            </h3>
            <h3>{person.age}
            </h3>
            <h3>{person.message}
            </h3>
            <button onClick={()=>{
                changeMessage();
            }}>change message</button>


    </div>
  )
}

export default Spread