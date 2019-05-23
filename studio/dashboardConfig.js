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
                  buildHookId: '5ce6c9c6e09aaed36e21129f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nx7bvrgb',
                  apiId: 'cb108e87-2e74-4518-8cfe-a72de8aee563'
                },
                {
                  buildHookId: '5ce6c9c7a041e377e31e24e8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pm79p4ci',
                  apiId: '577d2080-f77b-4104-b33c-747b1a4d4a2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AdLac/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pm79p4ci.netlify.com', category: 'apps'}
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
