---
tags: [Notebooks/Google_Sheets/Libraries/Sheet_Saver]
title: Sheet_Saver
created: '2019-10-21T08:57:44.606Z'
modified: '2019-10-21T09:04:11.589Z'
---

```js
function my_saveSheet() {
  var sheetName = 'Save';
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( sheetName );
  
  if( !sheet ) {
    ss.insertSheet( sheetName );
  }
  
  sheet = ss.getSheetByName( sheetName );
  sheet.hideSheet();
  
  var from = ss.getSheetByName( 'Import' ).getDataRange();
  var fromData = from.getValues();
  sheet.getRange( 1, 1, from.getLastRow(), from.getLastColumn() ).setValues( fromData );
}

//------------------------------------------------------------------------------

function my_loadSheet() {
  var sheetName = 'Save';
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( sheetName );
  
  if( !sheet ) {
    return
  }
  
  var range = sheet.getDataRange();
  var data = range.getValues();
  ss.getSheetByName( 'Import' ).getRange( 1, 1, range.getLastRow(), range.getLastColumn() ).setValues( data );
}
```
