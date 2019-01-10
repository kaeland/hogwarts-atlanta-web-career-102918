import React from 'react'

const HogListItem = (props) => {
  console.log(props)
  return (<div>{props.hog.name}</div>)
}

export default HogListItem