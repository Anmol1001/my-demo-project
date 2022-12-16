import React, {useState} from 'react'
import "./Standings.css"
import data from "./Matches-data1.json"

const Standings = () => {

  const [matc, setMatc] = useState(data)
  return (
    <div className='standings'>
        <table>
          <thead>
            <tr>
              <th>Home</th>
              <th></th>
              <th>Away</th>
            </tr>
          </thead>
          <tbody>
            {matc.map((matc) =>
            (
              <tr>
              <td>{matc.Home}</td>
              <td>vs</td>
              <td>{matc.Away}</td>
           </tr>
            ))}
            
          </tbody>
        </table>
    </div>
  )
}

export default Standings