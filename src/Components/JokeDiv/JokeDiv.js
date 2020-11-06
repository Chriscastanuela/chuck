import React from 'react'
import './Joke-Div.scss'

export default function JokeDiv(props) {
    return (
        <div className=''>
            {props.checkForJoke()}
        </div>
    )
}
