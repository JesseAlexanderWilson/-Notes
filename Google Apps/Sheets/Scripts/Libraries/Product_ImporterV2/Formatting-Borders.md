---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: Formatting-Borders
created: '2019-10-21T09:52:49.914Z'
modified: '2019-11-03T17:39:54.221Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## Formatting-Borders

### THTB & GTG
```js
/** ----------------------------------------------------------------------------
* Set Border Styles
*/
function my_setBorderStyles() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  
  var indexArray = [];
  
  //clear borders
  range.setBorder( false, false, false, false, false, false );

  indexArray = my_searchArray( values[0], 'U' );
  indexArray.forEach(
    function( index ) {
      var range = sheet.getRange( 1, index+1, lastRow )
      range.setBorder( null, null, null, true, null, null, null, SpreadsheetApp.BorderStyle.SOLID );
    }
  );
  
  indexArray = my_searchArray( values[0], 'Filename' );
  indexArray.forEach(
    function( index ) {
      var range = sheet.getRange( 1, index+1, lastRow )
      range.setBorder( null, null, null, true, null, null, null, SpreadsheetApp.BorderStyle.SOLID_THICK );
    }
  );
  
  var loc = my_searchArray( values[0], 'Lesson Title' )[0];
  for( var i = 1; i < lastRow-1; i++) {
    if( values[i][loc] !== values[i+1][loc] ) {
      var range = sheet.getRange( i+1, 1, 1, lastColumn )
      range.setBorder( null, null, true, null, null, null, null, SpreadsheetApp.BorderStyle.SOLID );
    }
  }
}

/** ----------------------------------------------------------------------------
* Search Array
*/
function my_searchArray( array, criteria ) {
  var range = array.map(
    function( element, i ) {
      if ( element === criteria ) {
        return i;
      }
    }
  ).filter(
    function( element ) {
      if ( element ) {
        return element;
      }
    }
  );
  
  return range;
}
```

### ADMC
```js
/** ----------------------------------------------------------------------------
* Set Border Styles
*/
function my_setBorderStyles() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  
  var indexArray = [];
  
  //clear borders
  range.setBorder( false, false, false, false, false, false );

  indexArray = my_searchArray( values[0], 'U' );
  indexArray.forEach(
    function( index ) {
      var range = sheet.getRange( 1, index+1, lastRow )
      range.setBorder( null, null, null, true, null, null, null, SpreadsheetApp.BorderStyle.SOLID );
    }
  );
  
  indexArray = my_searchArray( values[0], 'Filename' );
  indexArray.forEach(
    function( index ) {
      var range = sheet.getRange( 1, index+1, lastRow )
      range.setBorder( null, null, null, true, null, null, null, SpreadsheetApp.BorderStyle.SOLID_THICK );
    }
  );
  
  var loc = my_searchArray( values[0], 'Lesson Name' )[0];
  for( var i = 1; i < lastRow-1; i++) {
    if( values[i][loc] && values[i][loc] !== values[i+1][loc] ) {
      var range = sheet.getRange( i+1, 1, 1, lastColumn )
      range.setBorder( null, null, true, null, null, null, null, SpreadsheetApp.BorderStyle.SOLID );
    }
  }
  
  var loc = my_searchArray( values[0], 'Lesson Title' )[0];
  for( var i = 1; i < lastRow-1; i++) {
    if( values[i][loc] !== values[i+1][loc] ) {
      var range = sheet.getRange( i+1, 1, 1, lastColumn )
      range.setBorder( null, null, true, null, null, null, null, SpreadsheetApp.BorderStyle.SOLID_THICK );
    }
  }
}

/** ----------------------------------------------------------------------------
* Search Array
*/
function my_searchArray( array, criteria ) {
  var range = array.map(
    function( element, i ) {
      if ( element === criteria ) {
        return i;
      }
    }
  ).filter(
    function( element ) {
      if ( element ) {
        return element;
      }
    }
  );
  
  return range;
}
```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
