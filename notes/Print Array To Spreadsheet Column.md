---
tags: [Notebooks/Google_Sheets/Standalone]
title: Print Array To Spreadsheet Column
created: '2020-02-09T10:27:08.717Z'
modified: '2020-02-09T10:32:21.194Z'
---

# Print Array To Spreadsheet Column

## Main
```js
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

var array = [1, 2, 3, 4, 5];
array = transposeArray([array]);

sheet
.getRange(1, 1, 5, 1);
.setValues(array);
```

## Transpose Array Function
```js
function transposeArray(array){
  var tempArray = [];
  var new2dArray = [];
  
  for(var i = 0; i < array[0].length; i++) {
    for(var j = 0; j < array.length; j++) {
      tempArray.push(array[j][i]);
    };
    
    new2dArray.push(tempArray);
    tempArray = [];
  }
  
  return new2dArray;
}
```

