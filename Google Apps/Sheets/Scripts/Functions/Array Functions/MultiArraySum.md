## MultiArraySum

``` javascript
function MultiArraySum( array, index ) {
    var result = array.map(
    	function ( v ) {
    		return v[ index ];
    	}
    ).reduce(
    	function ( a, b ) {
    		return Number( a ) + Number( b );
    	}
    );
    return result;
}
```