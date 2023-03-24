import React from 'react'

const spanRender = props => (
  <span id={props.spanID}>
    {props.renderDefault(props)}
  </span>
)

export default spanRender