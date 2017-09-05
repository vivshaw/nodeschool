# lololodash

This is a neat little utility library. I went into this expecting not to need lodash due to the improvements to JS in ES6/ES7, but I was totally wrong! Here are some tidbits I plan to try out in my own code going forwards:

### mapping/filtering/reducing over objects

As a fan of the functional style, JS's inability to use map/filter/etc on objects has been a repeated pain point for me. With lodash, no such problem!

### math helpers

Things like `_.meanBy` save a ton of boilerplate!

### partition

This little gem does the work of both `filter` and  `reject` by splitting a collection into an array of values that satisfy a predicate, and an array of those that fail it. Combined with array destructuring & lodash's math helpers, this makes chopping up data an absolute breeze. Splitting a dataset around the mean of a particular property is now a 2-liner (and also clearer, IMO):

```js
foos = [
  { name: 'foo_1', height: '4'},
  { name: 'foo_2', height: '2'},
  { name: 'foo_3', height: '3'}
]

average = _.meanBy(foos, 'height');
[tall, short] = _.partition(foos, ({ height }) => height > average)
```

### countBy / groupBy

Ahhh, stuff I missed from Python/Pandas: easy grouping. With lodash, I can have that in JS!

# Conclusions

I'll probably be taking lodash for a spin in my next few projects & seeing how it feels! It may not be as 100% super essential as it was before ES6, but it's still got plenty of tasty bits to spice up my JS.
