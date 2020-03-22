module.exports = {
  title:'SunEngineDOCs',
  descriptions:'SunEngine documentation project',
  base: '/SunEngine.Docs/',
  dest: 'docs',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/' },
      {text: 'en_US', link: '/src/en/' },
      {text: 'ru_RU', link: '/src/ru/' }
    ],
//     sidebar: 'auto'
    sidebar: [
      { title: 'Russian',
        collapsable: false,
        children: [ '/src/ru/' ]
      },
      
      { title: 'Администрирование1',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { title: 'Файлы конфигурации',
            collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/configuration_files_ru.html' ] },
          { title: 'Структура сайта',
            collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/site_structure_ru.html' ] },
          { title: 'Организация сервиса systemd',
            collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/systemDmounting_ru.html' ] },
        ]
      },

      { title: 'Администрирование2',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/configuration_files_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/site_structure_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/systemDmounting_ru.html' ] },
        ]
      },


      // присваивание каждой статье собственного пункта меню:
      // ТОЖЕ ВАРИАНТ
      
      { title: 'Администрирование3',
      },
      { title: 'Файлы конфигурации',
        collapsable: false,
        sidebarDepth: 2,
        children: [ '/src/ru/administration/configuration_files_ru.html' ]
      },

      { title: 'Структура сайта',
        collapsable: false,
        sidebarDepth: 2,
        children: [ '/src/ru/administration/site_structure_ru.html' ]
      },

      { title: 'Организация сервиса systemd',
        collapsable: false,
        sidebarDepth: 2,
        children: [ '/src/ru/administration/systemDmounting_ru.html' ]
      },


      { title: 'Разработка',
        collapsable: false,
        children: [ '/src/ru/development/directory_structure_ru.html' ],
        children: [ '/src/ru/development/run_development_ru.html' ],
        children: [ '/src/ru/development/skins_ru.html' ]
      },
      { title: 'Инсталляция',
        collapsable: false,
        children: [ '/src/ru/installation/arguments_for_run_ru.html' ],
        children: [ '/src/ru/installation/deploy_ru.html' ],
        children: [ '/src/ru/installation/nginx_configuration_ru.html' ],
        children: [ '/src/ru/installation/prerequisites_ru.html' ],
        children: [ '/src/ru/installation/step_by_step_server_installation_ru.html' ]
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

// ### Русский
// 
// #### Администрирование
// 
// [Configuration_files ru_RU](/src/ru/administration/configuration_files_ru.html)
// 
// [Site Structure ru_RU](/src/ru/administration/site_structure_ru.html)
// 
// [SystemDmounting ru_RU](/src/ru/administration/systemDmounting_ru.html)
// 
// 
// #### Разработка
// 
// [Directory_structure ru_RU](/src/ru/development/directory_structure_ru.html)
// 
// [Run Development ru_RU](/src/ru/development/run_development_ru.html)
// 
// [Skins ru_RU](/src/ru/development/skins_ru.html)
// 
// 
// #### Инсталляция
// 
// [Arguments_for_run ru_RU](/src/ru/installation/arguments_for_run_ru.html)
// 
// [Deploy ru_RU](/src/ru/installation/deploy_ru.html)
// 
// [Nginx_configuration ru_RU](/src/ru/installation/nginx_configuration_ru.html)
// 
// [Prerequisites ru_RU](/src/ru/installation/prerequisites_ru.html)
// 
// [Step_by_step_server_installation ru_RU](/src/ru/installation/step_by_step_server_installation_ru.html)
