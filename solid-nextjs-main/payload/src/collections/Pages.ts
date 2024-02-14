import type { CollectionConfig } from 'payload/types'

import { Content } from '../blocks/Content'
import { hero } from '../fields/hero'

export const Pages: CollectionConfig = {
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
            required: true,
            type: 'text',
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
        },
        {
            tabs: [
                {
                    fields: [hero],
                    label: 'Hero',
                },
                // {
                //     fields: [
                //         {
                //             name: 'layout',
                //             blocks: [Content],
                //             required: true,
                //             type: 'blocks',
                //         },
                //     ],
                //     label: 'Content',
                // },
            ],
            type: 'tabs',
        },
    ],
    slug: 'pages',
}