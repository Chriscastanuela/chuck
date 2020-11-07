import React from 'react'
import './Joke-Div.scss'

export default function JokeDiv(props) {
    return (
        <section className='joke-section'>
            <div className='joke-div'>
                <input type="button" className='thumbs' value="👍" /*onclick={}*//>
                <input type="button" className='thumbs' value="👎" /*onclick={}*//>
                <p className='the-joke'>{props.checkForJoke()}</p>
            </div>
        </section>
    )
}
