export const getJoke = () => {
    fetch(`http://api.icndb.com/jokes/random?exclude=[explicit]`)
    .then(res => res.json())
    //.then(res => (
    //     console.log(res),
    //     this.setState({joke: res})
    // ))
}