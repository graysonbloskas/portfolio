export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'date',
            type: 'datetime',
        },
        {
            name: 'place',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'projectType',
            title: 'Project type',
            type: 'string',
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "school", title: "School" },
                ],
            },
        },
        {
            name: 'linkgh',
            type: 'url',
        },
        {
            name: 'linkls',
            type: 'url',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                   type: 'string',
                },
            ],
            options: {
                layout: 'tags'
            }
        }
    ],
};