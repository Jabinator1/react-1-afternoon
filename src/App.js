import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import FilterObject from './components/Topics/FilterObject';
import EvenAndOdd from './components/Topics/EvenAndOdd';
import Palindrome from './components/Topics/Palindrome';
import Sum from './components/Topics/Sum';
import FilterString from './components/Topics/FilterString';

class App extends Component {
  render() {
    return (
      <div>

        <TopicBrowser />
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}

export default App;
