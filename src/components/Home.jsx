import React from 'react';
import './Home.css'

function Home()
{
    return(
        <div className="home">
            <div className="content">
            <h4>Hello, this is page for football fans</h4>
            <h3>I am a <span class="fan">Chelsea fan.</span>The man in <span className="fan">Blue.</span></h3>
            <div className="newsletter">
                <form action="">
                    <input className ="Email" type="email" name='email' id="mail" placeholder="Enter Your Email" />
                    <input type="submit" name='submit' value={"Confirm"} />
                    </form>
                    <div className="favourites">
                        <form action="">
                    <input className ="fav" type="fav" name='fav' id="fav" placeholder="Your Favourite club" /><br/>
                    <input type="submit" name='submit' value={"Confirm"} />
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;
