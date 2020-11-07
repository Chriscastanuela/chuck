import React from 'react'
import './Joke-Div.scss'

export default function JokeDiv(props) {
    return (
        <section className='joke-section'>
            <div className='joke-div'>
                <h1 className='thumbs' id='left'>👍</h1>
                <h1 className='thumbs' id='right'>👎</h1>
                <p className='the-joke'>{props.checkForJoke()}</p>
            </div>
        </section>
    )
}
