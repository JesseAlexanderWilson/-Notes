---
tags: [Notebooks/Google_Sheets/Standalone]
title: Array Functions
created: '2019-10-21T18:33:54.703Z'
modified: '2019-10-21T18:33:56.196Z'
---

## 1-D Array Functions

### Sum Array

``` js
var sum = array.reduce( function ( a, b ) {
  return a + b;
} );

```

## 2-D Array Functions

### Sort 2-D Array

``` js
array.sort( function ( a, b ) {
  var x = a[ 1 ];
  var y = b[ 1 ];

  return x == y ? 0 : x < y ? -1 : 1;
} );

```

### Sum Column in 2-D Array

``` js
var sum = array.map( function ( v ) {
  return v[ 2 ]
} ).reduce( function ( a, b ) {
  return Number( a ) + Number( b )
} );

```
