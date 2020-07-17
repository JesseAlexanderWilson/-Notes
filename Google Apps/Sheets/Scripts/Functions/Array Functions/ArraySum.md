## ArraySum

``` javascript
function ArraySum( array ) {
    var result = array.reduce(
    	function ( a, b ) {
    		return Number( a ) + Number( b );
    	}
    );
    return result;
}
```