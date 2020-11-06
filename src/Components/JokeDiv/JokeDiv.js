import React from 'react'
import './Joke-Div.scss'

export default function JokeDiv(props) {
    return (
        <section className='joke-section'>
            <div>
                <h1>👍</h1>
                <h1>👎</h1>
                <div>{props.checkForJoke()}</div>
            </div>
        </section>
    )
}
