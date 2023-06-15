import React from 'react'

const pullQuoteRender = props => (
    <div>
    <blockquote>{props.quote}</blockquote>
    <cite>{props.cite}</cite>
    </div>
)

export default pullQuoteRender