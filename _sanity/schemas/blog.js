export default {
    name: 'blog',
    type: 'document',
    title: 'Blog Posts',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: 'author',
            type: 'reference',
            to: [{type:'members'}],
            title: 'Author',
            options: {
                disableNew: true
            }
        },
        {
            name: 'tags',
            type: 'array',
            of: [{type:'string'}],
            title: 'Tags'
        },
        {
            name: 'content',
            type: 'array',
            of: [
                {type:'block'},
                {type: 'bodyImage'},
                {type: 'pullQuote'}
            ],
            title: 'Content'
        },
        {
            name: 'featuredImage',
            type: 'image',
            title: 'Featured Image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                }
            ]
        }
    ]
}