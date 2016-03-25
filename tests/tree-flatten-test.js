import test from 'ava';
import flatten from '../src';

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

test('it should flatten an Tree Object', (t) => {
  const flat = flatten(tree, 'children');

  t.same(flat, [
    { name: 'root-1' },
    { name: 'root-1-1' },
    { name: 'root-1-2' },
    { name: 'root-1-2-1' },
  ]);
});
