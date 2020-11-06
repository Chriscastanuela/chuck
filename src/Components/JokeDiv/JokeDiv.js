import React from 'react'
import './Joke-Div.scss'

export default function JokeDiv(props) {
    return (
        <section className='joke-section'>
            {props.checkForJoke()}
            <div>
                <h1>👍</h1>
                <h1>👎</h1>
            </div>
        </section>
    )
}
