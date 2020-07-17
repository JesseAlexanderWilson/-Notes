## ArrayDifference

Version 1 Returns an array of the differences between both arrays

Version 2 Returns an array containing the values in array1 which do not exist in array2

### Version 1

``` javascript
function arrayDifference(array1, array2) {
  var temp = []
  var result = [];

  for (let i = 0; i < array1.length; i++) {
    temp[array2[i]] = true;
  }
    
  for (var i = 0; i < array2.length; i++) {
    if (temp[array2[i]]) {
      delete temp[array2[i]];
    }
    else {
      temp[array2[i]] = true;
    }
  }
    
  for (var value in temp) {
    result.push(value);
  }

  return result;
}
```

### Version 2

``` javascript
function arrayDifference(array1, array2) {
  var temp = [];
  var result = [];
  
  for (let i = 0; i < array1.length; i++) {
    temp[array1[i]] = true;
  }
  
  for (let i = 0; i < array2.length; i++) {
    if (temp[array2[i]]) {
      delete temp[array2[i]];
    }
  }
  
  for (var value in temp) {
    result.push(value);
  }
  
  return result;
}
```