import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

import './style/app.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    const id = e.target.id;
    this.setState(state => id === 'inc' ? state.counter++ : state.counter--);
  };

  render() {
    return (
      <div class='counter'>
        <h4 class={this.state.counter < 0 ? 'negative' : this.state.counter === 0 ? 'neutral' : 'positive'}>{this.state.counter}</h4>
        <div class="counter container">
          <button id='inc' onClick={this.handleButtonClick}>Increment</button>
          <button id='dec' onClick={this.handleButtonClick}>Decrement</button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
