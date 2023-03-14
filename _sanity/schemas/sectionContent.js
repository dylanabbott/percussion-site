export default {
    name: 'section-content',
    type: 'document',
    title: 'Section Content',
    fields: [
        {
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            hidden: true,
            initialValue: 'section'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'order',
            type: 'number',
            title: 'Order'
        },
        {
            name: 'pull_quote',
            type: 'string',
            title: 'Pull Quote'
        },
        {
            name: 'permalink',
            type: 'boolean',
            hidden: true,
            initialValue: false
        }
    ]
}