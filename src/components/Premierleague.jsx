import React,{useState}from 'react'
import './Premierleague.css'
import Matches from './Matches'
import Standings from './Standings'

const Premierleague = (props) => {
  const [active, setActive]= useState(true);
  return (
    <>
    <div className='premierleague'>
      <div className="tabs">
        <div className='tab-matches' style={{color:active?"#24242b":null}} onClick={()=> setActive(true)}>
          <h2>Matches</h2>
          </div>
        <div className='tab-standings'style={{color:!active?"#24242b":null}} onClick={()=> setActive(false)}>
          <h2>Standings</h2>
        </div>
      </div> 
      {active ? <Matches/> : <Standings/>}
    </div>
    </>
  )
}

export default Premierleague;
