# react-lessons-2023

### COMPILE ES5 into ES6
var express = require('express')

into

import express from 'express' 

### Installing necessary packages

- npm i @babel/cli @babel/core @babel/node @babel/preset-env --save-dev
- npm i @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread --save-dev
- npm i rimraf nodemon --save-dev

### Adding the following into package.json

"scripts": {\
   "test": "echo \"Error: no test specified\" && exit 1",\
  "build": "rimraf dist && babel src --out-dir dist  --copy-files",\
  "start": "node dist/app.js",\
  "start:dev": "nodemon --exec babel-node src/app.js"\
  },

#### Babel: create new file called .babelrc, then add the following into the file

{
"presets": [
["@babel/env", {
"targets": {
"node": "current"
}
}]
],
"plugins": [
"@babel/plugin-proposal-class-properties",
"@babel/plugin-proposal-object-rest-spread"
]
}


#### REF
https://dev.to/geekygeeky/get-started-with-es6-javascript-for-writing-nodejs-using-express-544h
