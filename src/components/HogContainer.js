import React, { Component } from 'react';
import HogList from './HogList'

export default class HogContainer extends Component {
  render() {
    return (
      <div className="hog-container ui grid container">
        <div className="six wide column">
          <HogList />
        </div>
        <div className="ten wide column">
          // HogDetails here
        </div>
      </div>
    );
  }
}