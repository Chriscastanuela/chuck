import React from 'react';
import './Main.scss';
import JokeDiv from '../JokeDiv/JokeDiv';

export default function Main(props) {
    return (
        <div className='main-section'>
            <JokeDiv checkForJoke={() => props.checkForJoke()}/>
        </div>
    )
}
