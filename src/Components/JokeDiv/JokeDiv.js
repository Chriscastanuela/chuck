import './Joke-Div.scss'
import React from 'react';
import PropTypes from 'prop-types';


export default function JokeDiv(props) {
    let joke = props.decodeHtml(props.theJoke);
    if (props.isMain) {
        return (
            <section className='joke'>
                <div className='joke-div'>
                    <input type="button" className='thumbs' value='👍' onClick={() => props.like(joke)} 
                    />
                    <p className='number'>{props.theKey}</p>
                    <p className='the-joke'>{joke}</p>
                </div>
            </section>
        )
    } else {
        return (
            <section className='joke'>
                <div className='joke-div'>
                    <input type="button" className='thumbs' value="👎" onClick={() => props.dislike(joke)}/>
                    <p className='the-joke'>{joke}</p>
                </div>
            </section>
        )
    }
}

JokeDiv.propTypes = {
    decodeHtml: PropTypes.func,
    theJoke: PropTypes.string,
    isMain: PropTypes.bool,
    like: PropTypes.func,
    dislike: PropTypes.func,
};