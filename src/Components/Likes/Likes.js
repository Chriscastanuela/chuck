import './Likes.scss'
import React, { Component } from 'react'
import chuck from '../../Assets/chuck.jpeg';
import JokeDiv from '../JokeDiv/JokeDiv';
import PropTypes from 'prop-types';


export default function Likes(props) {
    let theKey = 0;
    if (props.likes.length > 0) {
        let sortedJokes = props.likes.sort((a, b) => {
            return a.localeCompare(b)
        });
        return (
            <div className='likes-section'>
                {
                    sortedJokes.map(element => {
                        theKey += 1;
                        return (
                            <JokeDiv
                            key={theKey} 
                            decodeHtml={props.decodeHtml}
                            theJoke={element}
                            dislike={props.dislike}
                            isLikes={props.isLikes}
                            />
                        )
                    })
                }
            </div>
        )
    } else {
        return  (
            <div>
                <h1 className='likes-header'>You have no likes</h1>
                <img 
                src={chuck} 
                alt="loading" 
                className='chuck'
                />
            </div>
        )
    }
}

Likes.propTypes = {
    decodeHtml: PropTypes.func,
    jokes: PropTypes.array,
    dislike: PropTypes.func,
    isLikes: PropTypes.bool,
};