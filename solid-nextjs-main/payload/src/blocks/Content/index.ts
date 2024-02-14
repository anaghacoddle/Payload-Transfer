import type { Block, Field } from 'payload/types'

import { slateEditor } from '@payloadcms/richtext-slate'

const columnFields: Field[] = [
  {
    name: 'richText',
    type: 'richText',
    editor: slateEditor({
      admin: {
        elements: [
        ],
        leaves: [
        ]
      }
    }),
    label: 'Rich Text',
  },
]

export const Content: Block = {
  fields: [
    {
      name: 'columns',
      fields: columnFields,
      type: 'array',
    },
  ],
  slug: 'content',
}