let request = {
    getJokes: () => {
        return fetch(`https://api.icndb.com/jokes/random/558?exclude=[explicit]`)
        .then(res => res.json())
    }
}
export default request;