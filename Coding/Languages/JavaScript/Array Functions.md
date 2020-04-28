---
tags: [Notebooks/Google_Sheets/Standalone]
title: Array Functions
created: '2019-10-21T18:33:54.703Z'
modified: '2019-10-21T18:33:56.196Z'
---

# Array Functions

## Sum Array

``` javascript
var sum = array.reduce(
	function(a, b) {
		return a + b;
	}
);
```

# Multidimensional Array Functions

## Sort Multidimensional Array

``` javascript
array.sort(
	function(a, b) {
		var x = a[ 1 ];
		var y = b[ 1 ];
		
		return x == y ? 0 : x < y ? -1 : 1;
	}
);
```

## Sum Column in Multidimensional Array

``` javascript
var sum = array.map(
	function(v) {
		return v[ 2 ]
	}
).reduce(
	function(a, b) {
		return Number(a) + Number(b);
	}
);
```