import { useEffect, useState, useRef } from "react";
import "./App.css"
import Book from "./Book";
import Counter from "./Counter";
import Spread from "./Spread";
import Table from "./table";


function useEffect() {
  const [emplist, setEmplist] = useState([])

  useEffect(() => {
    xyz();
  }, []);

  const xyz = async () => {
    const data = await fetch('https://dummy.restapiexample.com/api/v1/employees')
    const resp = await (data.json)
    console.log(resp.data)
    setEmplist(resp.data)

  }
  xyz();
  return (
    <>
      <h1>
        hello
      </h1>
      {
        emplist.map((employee, index) => {
          return (
            <div key={index}>
              <h2>
                {employee.employee_name}
              </h2>

            </div>
          )
        })
      }


    </>

  )

}


export default useEffect;