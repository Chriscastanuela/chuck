import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <div className='header-body'>
            <a><h1 className='header-title'>Chuck Norris Jokes for the Bored</h1></a>
            <input type="button" className='thumbs-up-list' value="👍" /*onclick={}*//>
        </div>
    )
}
