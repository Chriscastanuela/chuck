import React from 'react'
import './Joke-Div.scss'

export default function JokeDiv(props) {
    return (
        <section className='joke'>
            <div className='joke-div'>
                <input type="button" className='thumbs' value="👍" onClick={() => props.like()}/>
                <input type="button" className='thumbs' value="👎" /*onClick={}*//>
                <p className='the-joke'>{props.theJoke}</p>
            </div>
        </section>
    )
}