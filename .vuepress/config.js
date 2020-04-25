module.exports = {

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'SunEngine Documentation',
      description: 'description in english'
    },
    '/src/ru/': {
      lang: 'ru-RU',
      title: 'Документация SunEngine',
      description: 'описание по-русски'
    }
  },
  base: '/',
  dest: 'docs',

  themeConfig: {
    logo: '/SunEngine.svg',
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Lang',
        // label for this locale in the language dropdown
        label: 'EN',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Lang',
        // text for the edit-on-github link
        //        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        //         serviceWorker: {
        //           updatePopup: {
        //             message: "New content is available.",
        //             buttonText: "Refresh"
        //           }
        //         },
        // algolia docsearch options for current locale
        //         algolia: {},
        //      nav: [
        //        { text: 'Nested', link: '/nested/' , ariaLabel: 'Nested' }
        //      ],

        // nav: [
        //   { text: 'EN', link: '/src/en/' },
        //   { text: 'RU', link: '/src/ru/' }
        // ],
        sidebar: {
          '/': [
            {
              title: 'Base',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 0,
                  children: ['/src/en/']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/base_en/about_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/base_en/install_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/base_en/license_en.html']
                }
              ]
            },
            {
              title: 'Administration',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/administration_en/site_structure_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/administration_en/configuration_files_en.html']
                },
              ]
            },
            {
              title: 'Manual installation',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/manual-install_en/prerequisites_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/manual-install_en/arguments_for_run_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/manual-install_en/deploy_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/manual-install_en/nginx_configuration_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/manual-install_en/systemDmounting_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/manual-install_en/step_by_step_server_installation_en.html']
                }
              ]
            },
            {
              title: 'Development',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/development_en/directory_structure_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/development_en/run_development_en.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/en/development_en/skins_en.html']
                }
              ]
            }
          ],
          // '/nested/': [/* ... */]
        }
      }, //                                                                  окончание ENGLISH
      '/src/ru/': {
        // text for the language dropdown
        selectText: 'Язык',
        // label for this locale in the language dropdown
        label: 'RU',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Язык',
        // text for the edit-on-github link
        //        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        //        serviceWorker: {
        //          updatePopup: {
        //            message: "New content is available.",
        //            buttonText: "Refresh"
        //          }
        //         },
        // algolia docsearch options for current locale
        //        algolia: {},
        //      nav: [
        //        { text: 'Nested', link: '/nested/' , ariaLabel: 'Nested' }
        //      ],
        // nav: [
        //   { text: 'EN', link: '/' },
        //   { text: 'RU', link: '/src/ru/' }
        // ],
        sidebar: {
          '/src/ru/': [
            {
              title: 'База',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 0,
                  children: ['/src/ru/']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/base_ru/about_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/base_ru/install_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/base_ru/license_ru.html']
                }
              ]
            },
            {
              title: 'Администрирование',
              collapsable: true,
              sidebarDepth: 2,
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/administration_ru/site_structure_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/administration_ru/configuration_files_ru.html']
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
                  children: ['/src/ru/manual-install_ru/prerequisites_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/manual-install_ru/arguments_for_run_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/manual-install_ru/deploy_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/manual-install_ru/nginx_configuration_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/manual-install_ru/systemDmounting_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/manual-install_ru/step_by_step_server_installation_ru.html']
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
                  children: ['/src/ru/development_ru/directory_structure_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/development_ru/run_development_ru.html']
                },
                {
                  collapsable: false,
                  sidebarDepth: 2,
                  children: ['/src/ru/development_ru/skins_ru.html']
                }
              ]
            }
          ],
          // '/nested/': [/* ... */]
        } // окончание sidebar
      }   // окончание RUSSIAN
    }     // окончание locales
  }       // окончание themeConfig
}         // окончание module.exports
