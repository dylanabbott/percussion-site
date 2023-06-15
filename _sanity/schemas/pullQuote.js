import pullQuoteRender from './pullQuoteRender.jsx'

export default {
    name: 'pullQuote',
    type: 'object',
    title: 'Pull Quote',
    components: { annotation: pullQuoteRender},
    fields: [
        {
            name: 'quote',
            type: 'text',
            title: 'Quote'
        },
        {
            name: 'cite',
            type: 'string',
            title: 'Citation'
        }
    ]
}