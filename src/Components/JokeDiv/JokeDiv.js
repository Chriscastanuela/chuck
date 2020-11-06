import React from 'react'

export default function JokeDiv(props) {
    return (
        <div>
            {props.checkForJoke()}
        </div>
    )
}
