import React from 'react'

const textWithIconRender = props => (
    <div>
        <img alt="{props.alt}" src="{props.icon}" width="75" height="75"/>
        <p>{props.iconText}</p>
    </div>
)

export default textWithIconRender