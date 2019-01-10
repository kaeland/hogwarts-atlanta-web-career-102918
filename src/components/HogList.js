import React, { Component } from 'react'
import hogs from '../porkers_data'
import HogListItem from './HogListItem'

export default class HogList extends Component {
  render() {
    // console.log(hogs)
    return (
      <div>
        {hogs.map((x, i) => {
          return <HogListItem key={x.name} hog={x}/>
        })}
      </div>
    );
  }
}

// Map over hogs 
    // hogs.map()