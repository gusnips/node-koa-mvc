KORE - Koa + Orientdb + React + Ejs
========

## Stack

Node simple MVC project using the following:  

+ [Koa](http://koajs.com)  koa framework and other koa packages
+ [OrientDB](https://github.com/orientechnologies/orientdb/)  database - uses [oriento driver](https://github.com/codemix/oriento)
+ [ReactJS](http://facebook.github.io/react/) Web components plus server render
+ [Ejs](http://embeddedjs.com/) View renderer with layout, helpers and include [support](https://github.com/koajs/ejs/)
+ [Redis](http://redis.io/) - mostly for cache and [session] (https://github.com/koajs/koa-session)
+ [Bootstrap](http://getbootstrap.com/) css framework. Comes with some templates


## Installation

CLONE, CLONE, CLONE!  
  
  
 Koa currently requires node 0.11.x for the --harmony flag which exposes generators to your script. If you're running an earlier version of node you may install [n](https://github.com/visionmedia/n), a node version manager to quickly install 0.11.x:  

```
$ npm install -g n
$ n 0.11.13
```

## Usage
  
Hack into the code and have fun!  
   
To start the server run:  

```
$ nohup sudo /opt/orientdb/bin/server.sh > /var/www/runtime/server.log&
$ sudo node --harmony app.js
```  
The above starts OrientDB server and logs the output to /var/www/runtime/server.log  
   
Now access [http://localhost](http://localhost) and voila  

## Structure

+ [configs] routes, general app stuff, authorization
+ - [enviroments] enviroment specific configuration file
+ [controllers] the C
+ [components] your components, modules and stuff
+ [helpers] general utilities, view helpers, view filters, reusable code snippets
+ [locales] translations used by [i18n-node-2](https://github.com/jeresig/i18n-node-2) ported to [koa-i18n](https://github.com/fundon/koa-i18n)
+ [models] the M
+ [views] the V
+  [layouts] by default main.html
+ [widgets] react components
+ [web] public folder
+ - [css]
+ - [fonts]
+ - [img]
+ - [js]
+ - - [components] React components
+ - - [libs]
