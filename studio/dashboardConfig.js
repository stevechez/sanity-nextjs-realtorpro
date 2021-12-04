export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61abb787607f1888a9e9fe28',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-realtorpro-studio',
                  apiId: 'd45a4967-d57c-4b3c-9648-409cd3f972e5'
                },
                {
                  buildHookId: '61abb788de719d87daf0ee30',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-realtorpro',
                  apiId: 'a990eb13-1f0e-4a1f-8554-0c61580dc6b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevechez/sanity-nextjs-realtorpro',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-realtorpro.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
