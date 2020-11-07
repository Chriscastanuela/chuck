import React from 'react';
import './Main.scss';
import JokeSection from '../Joke-Section/JokeSection';
import JokeDiv from '../JokeDiv/JokeDiv';

export default function Main(props) {
    if (props.jokes.length > 0) {
        return (
            <div className='main-section'>
                {/* <input type="button" className='give-me-one' value="Give Me One" onclick={}/> */}
                {/* <JokeSection
                checkForJoke={() => props.checkForJoke()}
                jokes={props.jokes}
                like={() => this.like()}
                /> 
                {props.checkForJoke()}
                */}
                {
                    props.jokes[0].value.map(element => {
                        return <JokeDiv 
                        jokes={props.jokes}
                        theJoke={element.joke}
                        like={() => props.like()}
                        />
                    })
                    // <JokeDiv 
                    // jokes={props.jokes}
                    // checkForJoke={() => props.checkForJoke()}
                    // like={() => props.like()}
                    // />
                }
            </div>
        )
    } else {
        return null;
    }
}
