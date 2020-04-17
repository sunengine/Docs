(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{216:function(v,e,_){"use strict";_.r(e);var t=_(28),o=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"файnы-конфигурации"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#файnы-конфигурации"}},[v._v("#")]),v._v(" Файлы конфигурации")]),v._v(" "),_("h2",{attrs:{id:"содержимое-директории-конфигурации"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#содержимое-директории-конфигурации"}},[v._v("#")]),v._v(" Содержимое директории конфигурации")]),v._v(" "),_("p",[v._v("Постоянные настройки")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("DataBaseConnection.json")]),v._v(" - подключение к базе данных")]),v._v(" "),_("li",[_("code",[v._v("SunEngine.json")]),v._v(" - настройки движка")]),v._v(" "),_("li",[_("code",[v._v("ServerInfo.json")]),v._v(" - информация о сервере (название, версия, описание и другие)")]),v._v(" "),_("li",[_("code",[v._v("LogConfig.json")]),v._v(" - настройка логов")])]),v._v(" "),_("h2",{attrs:{id:"директория-mailtemplates"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#директория-mailtemplates"}},[v._v("#")]),v._v(' Директория "MailTemplates"')]),v._v(" "),_("p",[v._v("Шаблоны почтовых сообщений при регистрации пользователя и для других ситуаций.")]),v._v(" "),_("p",[_("code",[v._v("layout.html")]),v._v(" - обёртка всех почтовых шаблонов.")]),v._v(" "),_("p",[_("code",[v._v("email-change.html")]),v._v(", "),_("code",[v._v("private-message.html")]),v._v(", "),_("code",[v._v("register.html")]),v._v(", "),_("code",[v._v("reset-password.html")]),v._v(" - шаблоны почтовых сообщений.")]),v._v(" "),_("p",[v._v("Директория "),_("code",[v._v("Init")]),v._v(". Только для стартовой инициализации базы данных сайта.")]),v._v(" "),_("p",[v._v("Используется только в команде - "),_("code",[v._v("dotnet SunEngine.dll init")]),v._v(":")]),v._v(" "),_("p",[_("code",[v._v("Init/Avatars")]),v._v(" - аватарки пользователей")]),v._v(" "),_("p",[_("code",[v._v("Init/Categories")]),v._v(" - создание и настройка категорий, далее на рабочем сервере категории настраиваются через админку.")]),v._v(" "),_("p",[_("code",[v._v("Init/Sections")]),v._v(" - создание и настройка компонентов: активность и посты.")]),v._v(" "),_("p",[_("code",[v._v("Init/Materials")]),v._v(" - создание материалов.")]),v._v(" "),_("p",[_("code",[v._v("Init/Menu")]),v._v(" - создание и настройка меню сайта, только для команды init, далее на рабочем сервере меню настраиваются через админку.")]),v._v(" "),_("p",[_("code",[v._v("Init/Avatars")]),v._v(" - задание аватарок пользователей при заполнении базы, имя файла должно совпадать с именем пользователя")]),v._v(" "),_("p",[_("code",[v._v("SeedTemplates")]),v._v(" - строки для заполнения материалов в тестовом режиме.")]),v._v(" "),_("p",[_("code",[v._v("Init/Config.json")]),v._v(" - начальные настройки ConfigurationItems из раздела админки "),_("code",[v._v("Конфигурация")]),v._v(".")]),v._v(" "),_("p",[_("code",[v._v("Init/Users.json")]),v._v(" - создание пользователей.")]),v._v(" "),_("p",[_("code",[v._v("Init/Roles.json")]),v._v(" - создание ролей пользователей и их прав.")]),v._v(" "),_("h2",{attrs:{id:"испоnьзование-директории-конфигурации"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзование-директории-конфигурации"}},[v._v("#")]),v._v(" Использование директории конфигурации")]),v._v(" "),_("p",[v._v("По умолчанию для размещения конфигурационных файлов используется директория "),_("code",[v._v("Config")]),v._v(".")]),v._v(" "),_("p",[v._v("В репозитории проекта этой директории нет - её необходимо создать копированием из:")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Config.dev.template")]),v._v(" в случае запуска для целей разработки;")]),v._v(" "),_("li",[_("code",[v._v("Config.server.template")]),v._v(" в случае запуска на сервере.")])]),v._v(" "),_("p",[v._v("Также, нестандартную директорию конфигурации можно указать явно - для этого служит опция "),_("code",[v._v("config:<AbsoluteOrRelativePath>")]),v._v(".")]),v._v(" "),_("p",[v._v("Необходимо учитывать, что имя директории конфигурации должно быть либо "),_("code",[v._v("Config")]),v._v(", либо заканчиваться на "),_("code",[v._v(".Config")]),v._v(".")]),v._v(" "),_("h3",{attrs:{id:"примеры"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#примеры"}},[v._v("#")]),v._v(" Примеры:")]),v._v(" "),_("p",[_("code",[v._v("dotnet SunEngine.dll server")]),v._v(" - запуск с директорией по умолчанию "),_("code",[v._v("Config")]),v._v(", в этом случае системой будет произведён поиск по дереву директорий от запускаемой вверх.")]),v._v(" "),_("p",[_("code",[v._v("dotnet SunEngine.dll server config:MySite")]),v._v(" - запуск с директорией "),_("code",[v._v("MySite.Config")]),v._v(" (суффикс "),_("code",[v._v(".Config")]),v._v(" добавляется автоматически)")]),v._v(" "),_("p",[_("code",[v._v("dotnet SunEngine.dll server config:MySite.Config")]),v._v(" - пример аналогичный "),_("code",[v._v("MySite.Config")])]),v._v(" "),_("p",[v._v("Команда "),_("code",[v._v("config")]),v._v(" действует так же и для всех других команд: "),_("code",[v._v("init, migrate, seed")]),v._v("..., например:")]),v._v(" "),_("p",[_("code",[v._v("dotnet SunEngine.dll migrate init seed config:MySite")])])])}),[],!1,null,null,null);e.default=o.exports}}]);