import React, { Component } from 'react';
import { link } from 'fs';

export default class Counter extends Component {
    state = {
        value: this.props.value,
        // imageUrl: 'https://picsum.photos/200'
        // tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
            </ul>
        );
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) => {
        console.log(product);
        this.setState({value: this.state.value + 1});
    };

    render() { 
        // this.getBadgeClasses();
        // console.log('props', this.props);
        
        return (
          <div>
            {/* <img src={this.state.imageUrl} alt=""/> */}
            {/* <span style={ this.styles } className="badge badge-warning m-2">{this.formatCount()}</span> */}
            {/* <button className={classes}>Decrement</button> */}
            {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
            {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button> */}
            {/* <ul>
                { this.state.tags.map(tag => <li key={tag}> { tag } </li>)}
            </ul> */}
            
            {/* <div>{this.renderTags()}</div>
            <div>{this.state.tags.length === 0 && "Please create a new tag!"}</div> */}
            
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={ (product) => {this.handleIncrement(product)}} 
                className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
            
          </div>
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    };

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    };
};
 
// export default Counter; //no need for this line because of "export default in line 3"