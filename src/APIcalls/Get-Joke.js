export const getJoke = () => {
    return fetch(`http://api.icndb.com/jokes/random?exclude=[explicit]`)
    .then(res => res.json())
}