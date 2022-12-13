import React,{useState,useEffect}from 'react';
import axios from 'axios'; 
import './Premierleague.css'
const Matches = () => {
     

    const [data, setData] = useState([]);

          
    useEffect(() => { 
        axios.get('https://api.sofascore.com/api/v1/sport/football/events/live').then((res) => {
            console.log(res.data);

        });
    
    
}, [])

return (
  
    <>
    <div className="matches">
        Matches
    </div>
    </>
)  





    }
export default Matches;