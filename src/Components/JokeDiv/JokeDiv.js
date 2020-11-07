import React from 'react'
import './Joke-Div.scss'

export default function JokeDiv(props) {
    return (
        <section className='joke-section'>
            <div className='joke-div'>
                {/* <div className='thumbs'>
                    <h1 className='thumb'>👍</h1>
                    <h1 className='thumb'>👎</h1>
                </div>
                <div>{props.checkForJoke()}</div> */}
                <h1 className='thumbs' id='left'>👍</h1>
                <h1 className='thumbs' id='right'>👎</h1>
                <p className='the-joke'>{props.checkForJoke()}</p>
                {/* <div className='joke'>{props.checkForJoke()}</div> */}
            </div>
        </section>
    )
}
