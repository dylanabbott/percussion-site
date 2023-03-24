import {TagIcon} from '@sanity/icons'
import spanRender from './spanRender'

export default {
  name: 'section-content',
  type: 'document',
  title: 'Section Content',
  fields: [
    {
      name: 'tags',
      type: 'string',
      hidden: true,
      initialValue: 'section',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
    {
      name: 'pullquote',
      type: 'string',
      title: 'Pull Quote',
    },
    {
      name: 'permalink',
      type: 'boolean',
      hidden: true,
      initialValue: false,
    },
    {
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'link',
                fields: [
                  {
                    name: 'url',
                    type: 'string',
                  },
                ],
              },
              {
                name: 'span',
                type: 'object',
                title: 'Span ID',
                icon: TagIcon,
                fields: [
                  {
                    name: 'spanID',
                    type: 'string',
                  },
                ],
                components: {
                  annotation: spanRender,
                },
              },
            ],
          },
        },
      ],
      title: 'Body',
    },
  ],
}
