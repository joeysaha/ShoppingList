import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [{
        id: 1,
        value: 4,
        name: 'aaaa'
      },
      {
        id: 2,
        value: 0,
        name: 'bbbb'
      },
      {
        id: 3,
        value: 0,
        name: 'cccc'
      },
      {
        id: 4,
        value: 0,
        name: 'dddd'
      }
    ]
  };

  constructor() {
    super();
    console.log('App - Constructor');
  };

  componentDidMount() {
    console.log('App - Mounted');
  };

  handleAddItem = (itemName) => {
    const counters = [...this.state.counters]
    const lastIndex = counters.length;
    counters.push({})
    counters[lastIndex]["name"] = itemName;
    counters[lastIndex].id = lastIndex;
    counters[lastIndex].value = 0;
    this.setState({counters});    
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter
    };
    counters[index].value++;
    // console.log(this.state.counters[0]);
    this.setState({
      counters
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) {
      counters[index] = {
        ...counter
      };
      counters[index].value--;
      console.log(this.state.counters[index]);
      this.setState({
        counters
      });
    }
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    })
  };

  render() {
    console.log('App - Rendered');
    
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters} 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete} 
            onDecrement={this.handleDecrement}
            onAddItem={this.handleAddItem}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
