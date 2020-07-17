---
tags: [Notebooks/Google_Sheets/Standalone]
title: Loops
created: '2019-10-21T18:35:10.837Z'
modified: '2019-10-21T18:35:11.842Z'
---

## For Each Loop

### Code Explanation

``` javascript
for each( var instance in list ) {
	//do stuff;
}
```

### Working Example

``` javascript
function My_logFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName( 'sheetname' );
    var range = sheet.getDataRange();
    var values = range.getValues();

    for each( var v in values ) {
    	Logger.log( v );
    }
```