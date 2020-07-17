## Object Functions

``` javascript
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

    for ( var item in list ) {
    	return item[ first ];
    }
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