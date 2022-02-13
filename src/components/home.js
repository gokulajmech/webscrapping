import React from 'react';
import { Link } from 'react-router-dom';
import  '../App.css';

function Home() {
    return <React.Fragment>
        <div className="path-btn">
        <Link to="/display/mobile">
            <span>Mobile</span>
        </Link>
    &nbsp;&nbsp;&nbsp;
        <Link to="/display/headphone">
            <span>HeadPhone</span>
        </Link>
        </div>
        <div>home page!!</div>
        <ul>
            <li>I cant deploy my server in heroku, and i cant resolve it in a time,so plz validate it locally</li>
            <li>And I cant find the proper API</li>
            <li>so that,i create this app by pushing my own data in server</li>
            <li>i write this app to search this keywords['mobile','headphone']</li>
        </ul>
    </React.Fragment>
}

export default Home
