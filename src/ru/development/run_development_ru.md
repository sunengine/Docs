## Запуск для development

### Создать базу

Если директории `"Config"` нет, скопировать её из `"Config.template"`.

Создать базу данных `<data_base_name>` на любой совместимой субд и прописать настройки и строку подключения в файл `"/SunEngine/Config/DataBaseConnection.json"`.


### Запуск из консоли

В папке `"SunEngine/Server/SunEngine.Cli"`.

Заполняем базу начальными данными `"dotnet run migrate init seed"` (если не сделано).

Запускаем сервер `"dotnet run server"`.

В папке `"SunEngine/Client"`.

Инсталлируем npm модули `"yarn install"` или `"npm install"` (если не сделано).

Запускаем клиент `"quasar dev"` - откроется браузер с сайтом.


### Запуск из Rider IDE 

При первом запуске необходимо выполнить пункты `1`, `2`, `4`, `7` (см. выше).

Серверная часть запускается стартом проекта `"/Server/SunEngine.Cli"`.

Добавление клиента на панель `Solution explorer`: 

Правый клик мыши на `SunEngine Solution -> "Add" -> "Attach Existing Folder" -> выбрать папку "SunEngine/Client"`.

Открываем npm меню:
- На `"package.json"`, правый клик мыши `-> "Tools" -> "Show npm Scripts"`.
- Клиентская часть запускается через npm скрипт `"dev run"`.

