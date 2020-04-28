---
tags: [Notebooks/Google_Sheets/Standalone]
title: Regex
created: '2019-10-21T18:35:14.963Z'
modified: '2019-10-21T18:35:16.164Z'
---

## Regex Replace

### Code Explanation

``` js
var regex = new RegExp( 'expression' );

for each( var object in range ) {
  object = object.toString()
  object = object.replace( regex, 'expression' );
  Logger.log( object );
}

```

### Working Example

``` js
function My_regexReplace() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var input = ss.getActiveSheet();
  var range = input.getDataRange();
  var values = range.getValues();

  var regex = new RegExp( ' - ([0-9])', 'g' );

  for each( var v in values ) {
    v = v.toString()
    v = v.replace( regex, '\|||$1' );
    Logger.log( v );
  }
}

```
