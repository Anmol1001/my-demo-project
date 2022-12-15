import './Navbar.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

function Navbar(props){
        const [links, setLinks]= useState([]);
        useEffect(() => {
          const navs = [{name: "Premier League", path:"/premierleague"},
          {name: "La Liga", path:"/laliga"},
          {name: "Ligue1", path:"/ligue1"}
        ]
        
          setLinks (navs)
          
        }, []);
        

return (
<>
        
    <div className="menu">
        
    <nav>
        <label className='logo'>{props.title} <br /><span className='color'>{props.title1}</span></label>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          
            <li><Link to="leagues">Leagues <i className='fas fa-caret-down'></i></Link>
               <div className="dropdown_menu">

               <ul>
            {links.map((d, i) =>(<>
                 <li key={i}>
                        <Link to={d.path}>{d.name}</Link>
                        </li>
                      
                
            </>
                
            ))}
               
            </ul>
               </div>
                </li>
                <li><Link to="/contact">Contact</Link>
                </li>
            
        </ul>
        <button type="button">Login</button>
    </nav>
    </div>





</>
)
}
export default Navbar;

