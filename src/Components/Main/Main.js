import React from 'react';
import './Main.scss';
import JokeSection from '../Joke-Section/JokeSection';
import JokeDiv from '../JokeDiv/JokeDiv';
import loading from '../../Assets/loading.png';

export default function Main(props) {
    
    let theKey = 0;

    if (props.jokes.length > 0) {
        let sortedJokes = props.jokes[0].value.sort((a, b) => {
            return a.joke.localeCompare(b.joke)
        })
        console.log("Main -> sortedJokes", sortedJokes)
        return (
            <div className='main-section'>
                {
                    sortedJokes.map(element => {
                        theKey += 1;
                        return (
                            <JokeDiv 
                            id={theKey}
                            theJoke={element.joke}
                            like={props.like}
                            dislike={props.dislike}
                            />
                        )
                    })
                }
            </div>
        )
    } else {
        return <img src={loading} alt="loading image" className='loading'/>
    }
}
