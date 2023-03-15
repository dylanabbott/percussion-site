export default {
    name: 'cases',
    type: 'document',
    title: 'Cases',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'content',
            type: 'array',
            of: [{type: 'block'}],
            title: 'Content'
        }
    ]
}