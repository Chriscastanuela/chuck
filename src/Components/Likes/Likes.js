import './Likes.scss'

import React, { Component } from 'react'

import chuck from '../../Assets/chuck.jpeg';

import JokeDiv from '../JokeDiv/JokeDiv';


export default function Likes(props) {
    let sortedJokes = props.likes.sort((a, b) => {
        return a.localeCompare(b)
    });
    // if (props.likes.length > 0) {
    //     return (
    //         <div className='likes-section'>
    //             {
    //                 sortedJokes.map(element => {
    //                     return (
    //                         <JokeDiv 
    //                         decodeHtml={props.decodeHtml}
    //                         theJoke={element}
    //                         dislike={props.dislike}
    //                         isLikes={props.isLikes}
    //                         />
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // } else {
    //     return  (
    //         <div>
    //             <h1 className='likes-header'>You have no likes</h1>
    //             <img src={chuck} alt="loading image" className='chuck'/>
    //         </div>
    //     )
    // }
}