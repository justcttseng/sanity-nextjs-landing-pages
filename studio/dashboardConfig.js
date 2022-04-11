export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62541c7545ef3459bb421922',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-81gajxx6',
                  apiId: '10bba627-0b6e-4530-ad77-521f45dbdda1'
                },
                {
                  buildHookId: '62541c7511c77554ea06f17b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bpbmkmcs',
                  apiId: 'a085f9dc-824a-49a7-901e-325d101c8739'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justcttseng/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bpbmkmcs.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
