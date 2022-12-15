import React,{useState} from 'react';
import './Contact.css';

function Contact()
{

const [records, setRecords] = useState([])

const [regist, setRegist] = useState({
username:" ",
email:" ",
phone:" ",
password:" ",
confirmpassword:""

});
const handleInput = (e) =>
{
const name = e.target.name;
const value =e.target.value;
console.log(value);

setRegist({...regist, [name]: value})
}

const handleSubmit= (e) =>
{
e.preventDefault();

const newRecord = {...regist, id : new Date().getTime().toString() }

setRecords(...records,newRecord);

setRegist({username:"", email:"",phone:"", password:" ",confirmpassworrd:"" });
}


return(
<>

<div className="contact">
<form action="#" onSubmit={handleSubmit}>
    <div className="user-details">
<div className="input-box">
<label htmlFor="username" className='details'>Name:</label>
<input type="text" autoComplete='off'
value={regist.username}
onChange={handleInput}


name="username" id='username' placeholder='Enter your name' required/>
</div>
<div className="input-box">
<label htmlFor="email" className='details'>Email: </label>
<input type="text" autoComplete='off'
value={regist.email}
onChange={handleInput}
name="email" placeholder='Enter your name' id='email'  />
</div>
<div className="input-box">
<label htmlFor="phone" className='details'>Phone No: </label>
<input type="number" autoComplete='off'
value={regist.phone}
onChange={handleInput}
name="phone" id='phone' placeholder='Enter your number' required/>
</div>
<div className="input-box">
<label htmlFor="password" className='details'>Password: </label>
<input type="password" autoComplete='off'
value={regist.passworrd}
onChange={handleInput}
name="password" id='password' placeholder='Enter your password' required/>
</div>
<div className="input-box">
<label htmlFor="confirmpassword" className='details'>Confirm Password:</label>
<input type="password" autoComplete='off'
value={regist.confirmpassworrd}
onChange={handleInput}


name="confirmpassword" id='confirmpassword' placeholder='Confirm your password' required/>
</div>
</div>
<div className="gender-details">
    <input type="radio" name='gender' id='dot-1' />
    <input type="radio" name='gender' id='dot-2' />
    <input type="radio" name='gender' id='dot-3' />
    <span className='gender-title'>Gender</span>
    <div className="category">
        <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender"> Male</span>
        </label>
       
        <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender"> Female</span>
        </label>
        
        <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender"> Prefer not to say</span>
        </label>
    </div>
</div>
<button type='submit' class="submit">Submit</button>




</form>



</div>
</>
)  

}

export default Contact;