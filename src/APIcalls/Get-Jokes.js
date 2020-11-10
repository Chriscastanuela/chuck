let request = {
    getJokes: () => {
        return fetch(`http://api.icndb.com/jokes/random/558?exclude=[explicit]`)
        .then(res => res.json())
    }
}
export default request;