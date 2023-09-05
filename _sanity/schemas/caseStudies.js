export default {
  name: 'caseStudies',
  type: 'document',
  title: 'Case Studies',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
        },
      ],
    },
    {
      name: 'problem',
      type: 'array',
      of: [{type: 'block'}, {type: 'pullQuote'}, {type: 'bodyImage'}],
      title: 'Problem',
    },
    {
      name: 'solution',
      type: 'array',
      of: [{type: 'block'}, {type: 'bodyImage'}],
      title: 'Solution',
    },
    {
      name: 'tactics',
      type: 'array',
      of: [{type: 'block'}, {type: 'bodyImage'}, {type: 'textWithIcon'}],
      title: 'Tactics',
    },
    {
      name: 'results',
      type: 'array',
      of: [{type: 'block'}, {type: 'bodyImage'}, {type: 'textWithIcon'}, {type: 'pullQuote'}],
      title: 'Results',
    },
    {
      name: 'conclusion',
      type: 'array',
      of: [{type: 'block'}, {type: 'bodyImage'}, {type: 'pullQuote'}],
      title: 'Conclusion',
    },
  ],
}
