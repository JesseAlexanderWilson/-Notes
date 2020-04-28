---
tags: [Notebooks/Google_Sheets/Standalone]
title: Ternary If Statement
created: '2019-10-21T18:35:40.939Z'
modified: '2019-10-21T18:35:41.667Z'
---

## Long Form

``` javascript
function largest( a, b ) {
    if ( a > b ) {
    	return a;
    }
    else {
    	return = b;
    }
}
```

## Ternary

``` javascript
function largest( a, b ) {
  	return ( a > b ) ? a : b;
}
```