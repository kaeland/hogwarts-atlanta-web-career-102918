import React, { Component } from 'react';
import HogList from './HogList'
import HogDetails from './HogDetails'
import hogs from '../porkers_data'

export default class HogContainer extends Component {
  render() {
    return (
      <div className="hog-container ui grid container">
        <div className="six wide column">
          <HogList />
        </div>
        <div className="ten wide column">
          <HogDetails hogs={hogs} />
        </div>
      </div>
    );
  }
}