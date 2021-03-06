import React from 'react';
import './Main.scss';
import JokeDiv from '../JokeDiv/JokeDiv';
import loading from '../../Assets/loading.png';
import PropTypes from 'prop-types';

export default function Main(props) {
    let theKey = 0;
    if (props.jokes.length > 0) {
        let sortedJokes = props.jokes[0].value.sort((a, b) => {
            return a.joke.localeCompare(b.joke)
        })
        return (
            <div className='main-section'>
                {
                    sortedJokes.map(element => {
                        theKey += 1;
                        return (
                            <JokeDiv 
                            key={theKey}
                            decodeHtml={props.decodeHtml}
                            theJoke={element.joke}
                            like={props.like}
                            isMain={props.isMain}
                            theKey={theKey}
                            />
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div>
                <h5 className='loading-message'>Loading</h5>
                <img src={loading} alt="loading" className='loading'/>
            </div>
        ) 
    }
}

Main.propTypes = {
    decodeHtml: PropTypes.func,
    jokes: PropTypes.array,
    like: PropTypes.func,
    isMain: PropTypes.bool,
};