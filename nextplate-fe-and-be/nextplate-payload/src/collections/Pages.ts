import { slateEditor } from '@payloadcms/richtext-slate'
import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  // labels: {
  //   singular: 'Page',
  //   plural: 'Pages',
  // },
access: {
  read: () => true,
},
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: 'http://localhost:3001',
    },
  },
  fields: [
    {
        name: 'title',
        type: 'text',
        label: "Title",
      },
      {
        name: 'slug',
        label: 'Slug',
        type: 'text',
      },
      {
        name: 'content',
        type: 'richText',
        editor: slateEditor({
          admin: {
            elements: [
            ],
            leaves: [
            ]
          }
        })
      },
  ],
}

export default Pages
