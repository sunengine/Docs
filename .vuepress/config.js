module.exports = {
  title: 'SunEngine Docs',
  descriptions: 'SunEngine documentation project',
  base: '/',
  dest: 'docs',
  themeConfig: {
    nav: [
      { text: 'EN', link: '/src/en/' },
      { text: 'RU', link: '/src/ru/' }
    ],
    sidebar:
      [
        {
          collapsable: false,
          sidebarDepth: 0,
          children: ['/src/ru/']
        },
        {
          collapsable: false,
          sidebarDepth: 0,
          children: ['/src/ru/about.html']
        },
        {
          collapsable: false,
          sidebarDepth: 2,
          children: ['/src/ru/install.html']
        },
        {
          title: 'Администрирование',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/administration/site_structure_ru.html']
            },
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/administration/configuration_files_ru.html']
            },
          ]
        },
        {
          title: 'Ручная инсталляция',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/manual-install/prerequisites_ru.html']
            },
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/manual-install/arguments_for_run_ru.html']
            },
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/manual-install/deploy_ru.html']
            },
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/manual-install/nginx_configuration_ru.html']
            },
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/manual-install/systemDmounting_ru.html']
            },
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/manual-install/step_by_step_server_installation_ru.html']
            }
          ]
        },
        {
          title: 'Разработка',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/development/directory_structure_ru.html']
            },
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/development/run_development_ru.html']
            },
            {
              collapsable: false,
              sidebarDepth: 2,
              children: ['/src/ru/development/skins_ru.html']
            }
          ]
        }
      ]
  }
}
