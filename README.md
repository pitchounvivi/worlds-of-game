# Worlds of Game

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bbbbd22c43a24ca2b21e0827755dbc61)](https://www.codacy.com/manual/pitchounvivi/worlds-of-game-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pitchounvivi/worlds-of-game-api&amp;utm_campaign=Badge_Grade)

### Requirement : nodeJS has to be installed 
[@see Node.js](https://nodejs.org/en/) *follow recommended installation*
### Requirement :  Java_JDK 8 has to be installed
### Requirement : git bash is used as prefered shell to "push" on GitHub website
[@see Git Bash](https://gitforwindows.org/) *follow recommended installation*
**Install with npm**

# Webpack Installation
___

* Project creation

> Create folder of project

In this folder execute Git Bash

> Or with shell 
```bash
mkdir folder name
cd folder name
```

* Initialization of Webpack
> In Git Bash shell
```bash
npm init 
npm install webpack webpack-cli --save-dev
```
Webpack bundler is been installed

___
### Complete informations in different files :

> In your repository you have to see
```html
 |- /dist
 |- /src
   |- index.js
 |- index.html
 |- webpack.config.js
 |- package.json
```
___

> In src/index.js file, add

```js
function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello ' + ' webpack';
  
    return element;
  }
  
  document.body.appendChild(component());
```

___
> In index.html file, add
```html
  <!doctype html>
<html>
  <head>
    <title>Getting Started</title>
    
  </head>
  <body>
    <script src="dist/index.js"></script>
  </body>
</html>
```

___
> In webpack.config.js file, add
```js
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'www/dist'),
    }
};
```
___
> In package.json file, add
```json
{
  "name": "webpack-projet",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run dev",
    "dev": "webpack --mode=development --watch",
    "prod": "webpack --mode=production --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9"
  }
}

```
If you load index.html on browser, "Hello webpack" message is displayed.

___
### Installation of Babel compiler
> In shell
```bash
npm install babel-loader babel-core --save-dev
```
___

> In webpack.config.js file, following this
```js
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'www/dist'),
    },
```
add: 
```js
module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }]
}
```

___

### Dynamic server Installation

> In shell
```bash
npm install browser-sync browser-sync-webpack-plugin --save-dev
```
___

> In webpack.config.js file

Add
```js
plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 9000,
            server: {
                baseDir: [
                    './www/'
                ]
            },
            files: [
                'www/index.html'
            ]
        })
    ],
```
___

## Run application Web
> In shell
```bash
npm start
```

Whenever a file linked to the entry point is modified, automatically browser displays web page and actualizes this.
___

---
*you should prefere local server for uses*

#  Cordova Installation

[@see installation cordova](https://cordova.apache.org/)

*Installation*
```bash
npm install cordova
```

*Creation a project*
```bash
node_modules/.bin/cordova create MyApp
```
*Installation Cordova in project MyApp*
```bash
cd MyApp
npm install cordova
```

*Android platform installation*
```bash
node_modules/.bin/cordova platform add android
```

*Run application on device*
```bash
node_modules/.bin/cordova run android --device
```


# Framework test Mocha with chai
**Install with npm**

```bash
npm install --save-dev mocha
npm install --save-dev chai
npm install @babel/preset-env --save-dev
npm install @babel/register --save-dev
npm install @babel/core --save-dev
```
> In root project create ".babelrc" file and add code like that 
```js
{
    "presets": ["@babel/preset-env"]
}

```

> In package.json file change informations like that 
```js
"scripts": {
    "test": "mocha --require @babel/register --recursive"
  },

```
[@see installation Mocha](https://mochajs.org/#installation)
[@see installation Chai](https://www.chaijs.com)

>Créer un dossier "test" ajoute un fichier "NomDuTest.spec.js" et inséré votre code de test dans le fichier.


```js
//Exemple
var assert = require('chai').should()
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


```
>Lancer le test
```bash
npm test
```


# Connection to Webserveur (Alwaysdata)

We will **connect** to the Words of Game server with the following identifiers:

* [Alwaysdata](https://admin.alwaysdata.com/login/)

>Login : YOUR_LOGIN </br>
Passeword: YOUR_PASSWORD

## Requirement ##

**Download** and **install** the software Filezilla.

*  [Filezilla](https://filezilla-project.org/)


## To begin

Connection with filezilla FTP </br>
> Hote : ftp-worldsofgame.alwaysdata.net </br>
> Login : YOUR_FTP_LOGIN </br>
> Password : YOUR_FTP_PASSWORD </br>
