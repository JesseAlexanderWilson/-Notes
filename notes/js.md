---
tags: [Notebooks/Misc]
title: js
created: '2019-11-10T07:43:32.990Z'
modified: '2019-11-10T07:43:57.515Z'
---

```js
function test() {
  var memo = [];
  var result = fib(3, memo);
}

function fib(n, memo) {
  if(memo[n] != undefined) {
    return memo[n];
  }
  if(n == 1 || n == 2) {
    result = 1;
  }
  else {
    result = fib(n-1, memo) + fib(n-2, memo)
  }
  memo[n] = result;
  return result;
}
```
