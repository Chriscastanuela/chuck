// import React from 'react';
// import './Main.scss';
// import JokeDiv from '../JokeDiv/JokeDiv';
// import loading from '../../Assets/loading.png';

// export default function Main(props) {
//     if (props.jokes.length > 0) {
//         let sortedJokes = props.jokes[0].value.sort((a, b) => {
//             return a.joke.localeCompare(b.joke)
//         })
//         return (
//             <div className='main-section'>
//                 {
//                     sortedJokes.map(element => {
//                         return (
//                             <JokeDiv 
//                             decodeHtml={props.decodeHtml}
//                             theJoke={element.joke}
//                             like={props.like}
//                             isMain={props.isMain}
//                             />
//                         )
//                     })
//                 }
//             </div>
//         )
//     } else {
//         return <img src={loading} alt="loading image" className='loading'/>
//     }
// }
