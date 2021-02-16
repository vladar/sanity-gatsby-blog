export default {
  widgets: [
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
                  buildHookId: '602c0442b73b6c5b0d2c25d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-scq4nkqm',
                  apiId: 'de03669b-247e-45cb-a58e-1b7701f723f0'
                },
                {
                  buildHookId: '602c0442b708aa66415848cf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j2bu48zg',
                  apiId: 'a239b783-6b50-459e-8064-86f4c19d21e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vladar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j2bu48zg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
