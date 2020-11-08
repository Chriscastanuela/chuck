import './Joke-Div.scss'
import React from 'react'

// export default function JokeDiv(props) {
//     let joke = props.decodeHtml(props.theJoke);
//     if (props.isMain) {
//         return (
//             <section className='joke'>
//                 <div className='joke-div'>
//                     <input type="button" className='thumbs' value='👍' onClick={() => props.like(joke)} />
//                     <p className='the-joke'>{joke}</p>
//                 </div>
//             </section>
//         )
//     } else {
//         return (
//             <section className='joke'>
//                 <div className='joke-div'>
//                     <input type="button" className='thumbs' value="👎" onClick={() => props.dislike(joke)}/>
//                     <p className='the-joke'>{joke}</p>
//                 </div>
//             </section>
//         )
//     }
// }