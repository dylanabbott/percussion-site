import textWithIconRender from "./textWithIconRender"

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
    },
    {
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'bodyImage'}, {type: 'textWithIcon'}],
      title: 'Content',
    },
  ],
}
