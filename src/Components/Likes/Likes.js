import './Likes.scss'

import React, { Component } from 'react'

import loading from '../../Assets/loading.png';

import JokeDiv from '../JokeDiv/JokeDiv';


export default class Likes extends Component {
    
    render(props) {
        let sortedJokes = this.props.likes.sort((a, b) => {
            return a.localeCompare(b)
        });
        let theKey = 0;
        if (this.props.likes.length > 0) {
            return (
                <div className='likes-section'>
                    {
                        sortedJokes.map(element => {
                            theKey += 1;
                            return (
                                <JokeDiv 
                                id={theKey}
                                theJoke={element}
                                like={this.props.like}
                                dislike={this.props.dislike}
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
}