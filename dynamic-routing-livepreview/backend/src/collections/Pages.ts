// import { Hero } from "../blocks/Hero";
// import { TwoColumn } from "../blocks/TwoColumn";

import { slateEditor } from "@payloadcms/richtext-slate";

export const Pages = {
    slug: 'pages',
    // labels: {
    //     singular: 'Page',
    //     plural: 'Pages',
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
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
        },
        // {
        //     name: 'layout',
        //     label: 'Layout',
        //     type: 'blocks',
        //     blocks: [
        //         Hero,
        //         TwoColumn,
        //     ]
        // },
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
    ]
}