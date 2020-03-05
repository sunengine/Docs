module.exports = {
  title:'SunEngineDOCs',
  descriptions:'SunEngine documentation project',
  base: '/SunEnging.Docs/docs/',
  dest: 'docs',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/' },
      {text: 'en_US', link: '/src/en/' },
      {text: 'ru_RU', link: '/src/ru/' }
    ],
//  sidebar: 'auto'
    sidebar: [
      {
        title: 'Russian',
        collapsable: false,
        children: [
          '/src/ru/'
        ]
      },
      {
        title: 'English',
        collapsable: false,
        children: [
          '/src/en/'
        ]
      }
    ]
  }
}
