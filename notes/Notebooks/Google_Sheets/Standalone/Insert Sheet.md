---
tags: [Notebooks/Google_Sheets/Standalone]
title: Insert Sheet
created: '2019-10-21T18:34:56.529Z'
modified: '2019-10-21T18:34:57.619Z'
---

## Code Explanation

``` js
var sheet = SpreadsheetApp.getSheetByName( 'sheetName' );

if ( !sheet ) {
  sheet = ss.insertSheet( 'sheetName' );
}

```

## Working Example

``` js
function My_insertSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Sheet2' );

  if ( !sheet ) {
    sheet = ss.insertSheet( 'Sheet2' );
  }
}

```
