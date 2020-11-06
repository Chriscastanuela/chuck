import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';

export default class App {
  constructor() {
    super()
    this.state = {
      joke: {}
    }
  }
  checkForJoke = () => {
    if (this.state.joke.value) {
      return this.state.joke.value.joke
    } else {
      return 'Loading'
      // {this.checkForJoke()}
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
