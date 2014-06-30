# Koa MVC

  Opinionated and minimalist MVC generator for [koa](http://koajs.com).

## Quick Start

 The quickest way to get started with a koa app is to utilize the executable `koa-mvc` to generate an application as shown below:

 Create the app:

```bash
    $ npm install -g koa-mvc
    $ koa-mvc /projects/foo && cd /projects/foo
```

 Install dependencies:

```bash
    $ npm install
```

 Rock and Roll

```bash
    $ node app
```

## Options

 + `-t, --template [engine]` add template <engine> support [ejs] only for now. Defaults to ejs.
 + `-i, --i18n` add i18n support. Translations used by [i18n-node-2](https://github.com/jeresig/i18n-node-2) ported to [koa-i18n](https://github.com/fundon/koa-i18n)
 + `-d, --db [engine]` add database <engine> support [mysql|postgresql|mongo|redis|memory|disk]. Defaults to disk
 + `-c, --css [engine]` add stylesheet <engine> support [less|stylus|plain]. Defaults to plain css
 + `-s, --session` add session support
 + `-a, --auth [type]` add [type] authentication support [facebook|google|github|bitbucket|local]. Type is optional. Use ':' as separator for multiples (f.x. facebook:google). Defaults to local only. Set as null, false or 0 to disable
 + `-f, --force` force on non-empty directory
 

## Notes
  
 Inspired by [express-generator](https://github.com/expressjs/generator)
  
 Koa currently requires node 0.11.x for the --harmony flag which exposes generators to your script. If you're running an earlier version of node you may install [n](https://github.com/visionmedia/n), a node version manager to quickly install 0.11.x:  

```
$ npm install -g n
$ n 0.11.13
```

## Structure

+ [configs] routes, general app stuff, authorization
+ - `main` application configuration
+ - `auth` authorization and authentication config
+ - `database` load models and initialize the database here
+ - `routes` load controllers and define the routes
+ [controllers] plain objects to use its methods as routes
+ - `site` 
+ - `auth` authentication and authorization methods
+ [locales] if i18n option is set
+ [models] uses [Waterline ORM](https://github.com/balderdashy/waterline/)
+ [views] the V
+ - [error] error views (401,403,404,error)
+ - [layouts] layouts folder (main, error)
+ - [site] application views (index, login)
+ [web] public folder
+ - [css]
+ - - `main.css`
+ - [img]
+ - [js]
+ - - `main.js`
