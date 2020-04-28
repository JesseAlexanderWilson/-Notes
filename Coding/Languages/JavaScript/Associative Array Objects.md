---
tags: [Notebooks/Google_Sheets/Standalone]
title: Associative Array Objects
created: '2019-10-21T18:34:05.676Z'
modified: '2019-10-21T18:34:06.974Z'
---

## Associative Array Objects

``` javascript
var myObj = {
    apples: 2,
    oranges: 10,
    bananas: 0
}
Logger.log( myObj[ 'apples' ] );
```

## Multidimensional Associative Array Objects

``` javascript
var myObj = {
    fred: {
        apples: 2,
        oranges: 4,
        bananas: 7,
        melons: 0
    },
    mary: {
        apples: 0,
        oranges: 10,
        bananas: 0,
        melons: 0
    },
    sarah: {
        apples: 0,
        oranges: 0,
        bananas: 0,
        melons: 5
    }
}
Logger.log( myObj[ 'fred' ][ 'apples' ] );
```

### Get Next Key

``` javascript
function NextKey( obj, key ) {
    var keys = Object.keys( obj );
    var index = 0;

    if ( key !== undefined ) {
    	index = keys.indexOf( key ) + 1;
    }
    return keys\[ index\ ]
}
```

### In Use

``` javascript
var ListOfObjects = {
	bananas: 1,
	blueberries: 2,
	pears: 0
};

var key = NextKey( ListOfObjects );
Logger.log( key );

var key = NextKey( ListOfObjects, key );
Logger.log( key );

var key = NextKey( ListOfObjects, key );
Logger.log( key );
```