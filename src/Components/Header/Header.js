import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-body'>
            <NavLink to="/">
                <h1 className='header-title'>Chuck Norris Jokes for the Bored</h1>
            </NavLink>
            <NavLink to="/likes">
                <input type="button" className='thumbs-up-list' value="👍" />
            </NavLink>
        </div>
        //Hello World
    )
}
