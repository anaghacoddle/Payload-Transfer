import type { Field } from 'payload/types'
import { slateEditor } from '@payloadcms/richtext-slate'

export const hero: Field = {
  name: 'hero',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'link',
            'blockquote',
            'ol',
            'ul',
            'textAlign',
            'indent',
            'relationship',
            'upload',
            'textAlign'
          ],
          leaves: [
            'bold',
            'code',
            'italic',
            'strikethrough',
            'underline'
          ]
        }
      }),
      label: 'Rich Text',
    },
    // {
    //   name: 'media',
    //   relationTo: 'media',
    //   type: 'upload',
    // },
    // {
    //   name: 'media1',
    //   relationTo: 'media',
    //   type: 'upload',
    // },
    {
      name: 'image',
      type: 'array',
      label: 'Media',
      fields: [
        {
          name: 'media',
          relationTo: 'media',
          type: 'upload',
        },
      ],
    },
  ],
  label: false,
  type: 'group',
}