'use strict';

module.exports = function flattenTree(root, key) {
  let flatten = [Object.assign({}, root)];
  delete flatten[0][key];

  if (root[key] && root[key].length > 0) {
    return flatten.concat(root[key]
      .map((child)=>flattenTree(child, key))
      .reduce((a, b)=>a.concat(b), [])
    );
  }

  return flatten;
};
