---
tags: [Notebooks/Google_Sheets/Standalone]
title: Helper Functions
created: '2019-10-21T18:31:01.065Z'
modified: '2019-10-21T18:32:38.047Z'
---

<!-- toc -->

* [Array Functions](#Array-Functions)
* [Object Functions](#Object-Functions)
* [Debug Functions](#Debug-Functions)

<!-- tocstop -->

## Array Functions

``` js
//--------------------------------------------------------------------------------
// Array Functions
//--------------------------------------------------------------------------------

function ArraySum( array ) {
  var result = array.reduce( function ( a, b ) {
    return Number( a ) + Number( b )
  } );

  return result;
}

//--------------------------------------------------------------------------------

function MultiArraySum( array, index ) {
  var result = array.map( function ( v ) {
      return v[ index ]
    } )
    .reduce( function ( a, b ) {
      return Number( a ) + Number( b )
    } );

  return result;
}

```

## Object Functions

``` js
//--------------------------------------------------------------------------------
// Object Functions
//--------------------------------------------------------------------------------

function FirstObjKey( list ) {
  var keys = Object.keys( list );

  return keys[ 0 ];
}

//--------------------------------------------------------------------------------

function FirstObjValuey( list ) {
  var keys = Object.keys( list );
  var first = keys[ 0 ];

  for ( var item in list )
    return item[ first ];
}

//--------------------------------------------------------------------------------

function NextKey( obj, key ) {
  var keys = Object.keys( obj );
  var index = 0;

  if ( key !== undefined ) {
    index = keys.indexOf( key ) + 1;
  }
  return keys[ index ];
}

```

## Debug Functions

``` js
//--------------------------------------------------------------------------------
// Debug
//--------------------------------------------------------------------------------

function log( variable ) {
  Logger.log( variable );
}

```
