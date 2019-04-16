import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    styles = {
        fontWeight: "bold", 
        fontSize: 20, 
        width: "400px"
    }

    render() { 
        console.log("Counter - Rendered");

        const { onReset, counters, onDelete, onIncrement, onDecrement, onAddItem } = this.props;

        return (
          <div>
            <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2"
            >
                Reset
            </button>

            {counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onDelete={onDelete} 
                    // value={counter.value} 
                    // id={counter.id}
                    onIncrement={onIncrement}
                    counter={counter}
                    onDecrement={onDecrement}
                >
                    {/* <h4>Counter #{counter.id}</h4> */}
                </Counter>
            ))}
            
            <div>
                <input type="text" placeholder="Add another item to your shopping cart" style={this.styles}/>
                <button 
                    onClick={ () => {
                        const inputField = document.querySelector('input');
                        onAddItem(inputField.value);
                        inputField.value = '';
                    }} 
                    className="btn btn-primary btn-sm m-2"
                >
                    Add Item
                </button>
            </div>
          </div>
        );
    }
}
 
export default Counters;