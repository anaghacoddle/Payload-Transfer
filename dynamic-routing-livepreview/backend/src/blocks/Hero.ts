export const Hero = {
    slug: 'hero',
    labels: {
        singular: 'Hero Blank',
        plural: 'Hero Blanks',
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
        },
        {
            name: 'text',
            label: 'Text',
            type: 'tetextarea',
        },
        {
            name: 'backgroundImage',
            label: 'Background Image',
            type: 'upload',
            relationTo: 'media'
        },
    ]
}