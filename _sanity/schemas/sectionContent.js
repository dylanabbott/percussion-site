export default {
    name: 'section-content',
    type: 'document',
    title: 'Section Content',
    fields: [
        {
            name: 'tags',
            type: 'string',
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
            name: 'pullquote',
            type: 'string',
            title: 'Pull Quote'
        },
        {
            name: 'permalink',
            type: 'boolean',
            hidden: true,
            initialValue: false
        },
        {
            name: 'body',
            type: 'array',
            of: [{type:'block'}],
            title: 'Body'
        }
    ]
}