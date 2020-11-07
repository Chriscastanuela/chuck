import './Joke-Section.scss'
import React from 'react'
import JokeDiv from '../JokeDiv/JokeDiv';

export default function JokeSection(props) {
    return (
        <div className='joke-section'>
            {
                props.jokes.map(i => {
                    return (
                        <JokeDiv 
                        // jokes={props.jokes}
                        checkForJoke={() => props.checkForJoke()}
                        like={() => props.like()}
                        />
                    )
                })
            }
            {/* <JokeDiv 
            // jokes={props.jokes}
            checkForJoke={() => props.checkForJoke()}
            like={() => props.like()}
            /> */}
        </div>
    )
}