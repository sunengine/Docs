# Запуск для development

## Создать базу

Если в корне проекта нет директории `Config`, её нужно скопировать из `Config.dev.template`. Иначе говоря, необходимо в корне проекта создать директорию `Config` с тем же содержимым что и `Config.dev.template` в корне проекта.

Создать базу данных `<data_base_name>` на любой совместимой субд и прописать настройки и строку подключения в файл `/SunEngine/Config/DataBaseConnection.json`.


## Запуск из консоли

В директории `SunEngine/Server/SunEngine.Cli`.

Заполняем базу начальными данными `dotnet run migrate init seed` (если не сделано).

Запускаем сервер командой `dotnet run server` в дирректории `SunEngine/Client`.

Инсталлируем *npm*-модули `yarn install` или `npm install` (если не сделано).

Запускаем клиент `quasar dev` - откроется браузер с сайтом.


## Запуск из Rider IDE 

При первом запуске необходимо выполнить пункты `1`, `2`, `4`, `7` (см. выше).

Серверная часть запускается стартом проекта `/Server/SunEngine.Cli`.

Для запуска клиентской части, необходимо выполнить "Добавление клиента на панель" `Solution explorer` правым кликом мыши на `SunEngine Solution -> Add -> Attach Existing Folder ->` выбрать каталог `SunEngine/Client`.

Далее открываем `npm` меню и выполняем:
- на файле `package.json` правый клик мыши `Tools -> Show npm Scripts`;
- клиентская часть запускается через *npm*-скрипт `dev run`.

## Дополнительно

Возможен запуск клиента `quasar dev` с любым конфигурационном файлом
```
quasar dev --config path/to/config.js
```
Пример для работы с `demo.sunengine.site api`
```
quasar dev --config src/demo.sunengine.site.config.js
```
Если в дирректорию `src` положить файл `l.config.js` он будет браться по умолчанию `quasar dev` вместо `config.js`

Префикс `l.` означает что файл не уйдёт на `git` (смотрите `.gitignore`). 