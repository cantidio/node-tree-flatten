[![NPM](https://nodei.co/npm/tree-flatten.png)](https://nodei.co/npm/tree-flatten/)

[![Build Status](https://travis-ci.org/cantidio/node-tree-flatten.svg?branch=master)](https://travis-ci.org/cantidio/node-tree-flatten)
[![Code Climate](https://codeclimate.com/github/cantidio/node-tree-flatten/badges/gpa.svg)](https://codeclimate.com/github/cantidio/node-tree-flatten)
[![Test Coverage](https://codeclimate.com/github/cantidio/node-tree-flatten/badges/coverage.svg)](https://codeclimate.com/github/cantidio/node-tree-flatten/coverage)
[![Dependencies](https://david-dm.org/cantidio/node-tree-flatten.svg)](https://david-dm.org/cantidio/node-tree-flatten)
[![devDependencies Status](https://david-dm.org/cantidio/node-tree-flatten/dev-status.svg)](https://david-dm.org/cantidio/node-tree-flatten#info=devDependencies)


# Tree Flatten

> Flatten nested tree objects to array

## Install
```
  npm install --save tree-flatten
```
## Usage
```js
  const flatten = require('tree-flatten');
  const tree = {
    name: 'root-1',
    children: [{
      name: 'root-1-1'
    }, {
      name: 'root-1-2',
      children:[{
        name: 'root-1-2-1'
      }]
    }]
  };

  flatten(tree, 'children')
  /* =>
  [
    { name: 'root-1' },
    { name: 'root-1-1' },
    { name: 'root-1-2' },
    { name: 'root-1-2-1' },
  ]
  */
```

### License
MIT
