export default {
    name: 'textWithIcon',
    type: 'object',
    title: 'Text With Icon',
    fields: [
        {
            name: 'icon',
            type: 'image',
            title: 'Icon',
            description: 'Upload an SVG icon for this block of text.'
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
            description: 'Describe the Icon'
        },
        {
            name: 'content',
            type: 'array',
            of: [
                {type: 'block'}
            ],
            title: 'Content'
        },
    ]
}