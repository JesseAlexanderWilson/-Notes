## ArrayToColumn

``` javascript
function arrayToColumn(array) {
  var result = array.map(
    function(value) {
      return [value];
    }
  );
  
  return result;
}
```