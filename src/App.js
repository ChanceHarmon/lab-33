import React from 'react';
import { CounterContext } from './components/counter-context/counter-context';
import Counter from './components/counter/counter';
import Incrementer from './components/incrementer/incrementer';
import Decrementer from './components/decrementer/decrementer';

export default class App extends React.Component {
  static contextType = CounterContext;
  render() {
    const { styles } = this.context;
    return (
      <div style={styles.container}>
        <Decrementer />
        <Counter />
        <Incrementer />
      </div>
    );
  }
}