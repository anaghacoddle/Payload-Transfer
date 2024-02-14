export const TwoColumn = {
    slug: 'twoColumn',
    labels: {
        singular: 'Two Column Block',
        plural: 'Two Column Blocks',
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
        },
        {
            name: 'image',
            label: 'Image',
            type: 'tetextarea',
        },
        {
            name: 'direction',
            label: 'Direction',
            type: 'select',
            options: [{
                label: 'Default',
                value: 'default',
            },
            {
                label: 'Reverse',
                value: 'reverse',
            }]
        },
    ]
}