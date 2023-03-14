export default {
    name: 'member',
    type: 'document',
    title: 'Member',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'roles',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'portrait',
            type: 'image',
            description: 'For best results, use a square photo.',
            title: 'Portrait'
        },
        {
            name: 'bio',
            type: 'array',
            of: [{type: 'block'}],
            title: 'Bio'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'website_url',
            type: 'url',
            title: 'Website Link'
        },
        {
            name: 'website_name',
            type: 'string',
            title: 'Website Name'
        }
    ]
}