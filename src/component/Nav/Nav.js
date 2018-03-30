import React from 'react';
import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'

export default function Nav() {
    return (
        <div>
            <Link to = '../Dashboard'>
                <button className="homeButton" >
                    Home
                </button>
            </Link>
            <Link to = '../Post'>
                <button className="postButton" >
                    New Post
                </button>
            </Link>
            <Link to ='../Auth'>
                <button className="LogoutButton">
                    Logout
                </button>
            </Link>
        </div>
        
    )
}