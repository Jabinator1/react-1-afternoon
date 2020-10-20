import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import FilterObject from './components/Topics/FilterObject';
import EvenAndOdd from './components/Topics/EvenAndOdd';
import Palindrome from './components/Topics/Palindrome';
import Sum from './components/Topics/Sum';

class App extends Component {
  render() {
    return (
      <div>

        <TopicBrowser />
        <EvenAndOdd />
        <FilterObject />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}

export default App;
