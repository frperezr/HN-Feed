// Node Modules
import React, { Component } from 'react';

// Components
import Header from './header';
import Content from './content';

// Main Component
export default class News extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
