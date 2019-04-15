import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');
    
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar{" "} <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
    </nav> );
    // the span would normally have "this.props.totalCounters" but since this is a SFC, it only works for class components so we don't need it. Use SFC for components that don't need state
};
 
export default NavBar;