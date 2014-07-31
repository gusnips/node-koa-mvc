# Koa MVC

  Opinionated and minimalist MVC generator for [koa](http://koajs.com). Inspired by [express-generator](https://github.com/expressjs/generator).

## Quick Start

 The quickest way to get started with a koa app is to utilize the executable `koa-mvc` to generate an application as shown below:

 Create the app:

```sh
    npm install -g koa-mvc
    koa-mvc /projects/foo && cd /projects/foo
```

 Install dependencies:

```sh
    npm install
```

 Rock and Roll

```sh
    node --harmony app
```

## Options

 - `-t, --theme [name]` switch application theme to <name> [white|green|violet|red]. Defaults to red.
 - `-d, --db [engine]`  change database <engine> to one of [mysql|postgresql|mongo|redis|memory|disk]. Defaults to disk.
 - `-c, --css [engine]`  add stylesheet <engine> support [less|stylus|plain]. Defaults to plain css.
 - `-a, --auth [type]`  add [type] authentication support [facebook|google|github|bitbucket|local]. Defaults to local only.
   Use ":" as separator for multiples (f.x. local:facebook:google). Set to `false` to disable (like `koa-mvc ... -a false`).
 - `-e, --template [engine]`  change template engine. Support [ejs] only for now. Defaults to ejs.
 - `-i, --i18n`  add i18n support. Translations used by [i18n-node-2](https://github.com/jeresig/i18n-node-2) ported to [koa-i18n](https://github.com/fundon/koa-i18n)
 - `-S, --no-session`  remove [session](https://github.com/koajs/generic-session) support. Session is enabled by default.
 - `-f, --force`  force on non-empty directory

   Example using layout green, mysql as db, facebook and google authentication:

```sh
    koa-mvc ~/www/test-koa-mvc -t green --db mysql -a local:facebook:google
    cd ~/www/test-koa-mvc
    npm install
    node --harmony app
```

Go to [http://localhost:3000](http://localhost:3000) and have fun hacking


## Enough talk, show me something

green with facebook auth  
`koa-mvc myapp -t green -a facebook:github:google`:  
  
![koa-mvc green app print screen](https://github.com/gusnips/node-koa-mvc/raw/master/images/green-auth.jpg "koa-mvc green app print screen")
![koa-mvc green app login print screen](https://github.com/gusnips/node-koa-mvc/raw/master/images/green.jpg "koa-mvc green app login print screen")

## Structure

+ `configs` routes, general app stuff, authorization
+ - `main` application configuration
+ - `auth` authorization and authentication config
+ - `database` load models and initialize the database here
+ - `routes` load controllers and define the routes
+ `controllers` plain objects to use its methods as routes
+ - `site`
+ - `auth` authentication and authorization methods
+ `locales` if i18n option is set
+ `models` uses [Waterline ORM](https://github.com/balderdashy/waterline/)
+ `views` templates
+ - `error` error views (401,403,404,error)
+ - `layouts` layouts folder (main, error)
+ - `site` application views (index, login)
+ `web` public folder
+ - `css`
+ - `js`

## Uses

+ [koa](http://koajs.com) (obviously)
+ [ejs](https://github.com/koajs/ejs) EJS as view engine
+ [waterline](https://github.com/balderdashy/waterline) as ORM

Also

+ [koa-bodyparser](https://github.com/koajs/body-parser) to handle post data easier
+ [koa-static](https://github.com/koajs/static) exposes assets (js e css)
+ [koa-router](https://github.com/alexmingoia/koa-router) you know, for routes

Optional
+ [koa-generic-session](https://github.com/koajs/generic-session) if has session support
+ [koa-flash](https://github.com/rickharrison/koa-flash) for session flash messages
+ [koa-passport](https://github.com/rkusa/koa-passport) for authentication, also passport extensions for each kind of auth 
+ [koa-locale](https://github.com/fundon/koa-locale) if option i18n is set
+ [koa-i18n](https://github.com/fundon/koa-i18n) if option i18n is set
+ [koa-less](https://github.com/chosecz/koa-less) if you choose less as css engine
+ [koa-stylus](https://github.com/yosssi/koa-stylus) if you choose stylus as css engine

## Roadmap

+ Finish authentication
+ add swig template engine
+ better i18n support (actually use it in the views to translate)
+ convert css to less (works if there is raw css but it's not ideal)
+ add tests

Also

+ Generate controller command
+ Generate model command
+ Generate CRUD command


## Notes

 Koa currently requires node 0.11.x for the --harmony flag which exposes generators to your script. If you're running an earlier version of node you may install [n](https://github.com/visionmedia/n), a node version manager to quickly install 0.11.x:

```
$ npm install -g n
$ n 0.11.13
```
