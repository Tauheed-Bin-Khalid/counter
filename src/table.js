import { useState } from "react";
import "./App.css"
import Book from "./Book";

function Table() {
  const data = [
    { id: 1, name: 'tauheed', rollno: 123 },
    { id: 2, name: 'ali', rollno: 124 },
    { id: 3, name: 'ahmed', rollno: 126 },
    { id: 4, name: 'zain', rollno: 128 },

  ]
  const [people, setpeople] = useState(data)




  return (
    <div style={{ textAlign: "center",width:"50%",margin:"0px auto" }}>
      <div style={{ textAlign: "center" }}>
        <table style={{ width: "50%", borderCollapse: "collapse" }}>
          <tr className="tr">
            <th style={{ borderBottom: "1px solid #ddd" }}>
              Roll No


            </th>
            <th style={{ borderBottom: "1px solid #ddd" }}>
              Name
            </th>
          </tr >


          {
            people.map(({id,name,rollno}) => {
              return (
                <tr key={id} className="tr" >
                  <td style={{ borderBottom: "1px solid #ddd" }}>
                    {rollno}
                  </td>
                  <td style={{ borderBottom: "1px solid #ddd" }}>
                    {name}
                  </td>
                </tr>
              )

            })
          }

        </table>

      </div>

    </div>

  );
}


export default Table;