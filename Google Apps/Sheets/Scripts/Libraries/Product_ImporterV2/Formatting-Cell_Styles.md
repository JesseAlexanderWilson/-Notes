---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: Formatting-Cell_Styles
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-27T02:52:43.426Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## Formatting-Cell_Styles

```js
/** ----------------------------------------------------------------------------
* Set Cell Styles
*/
function my_setCellStyles() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  
  my_setFontStyles( sheet, range, values, lastRow, lastColumn );
  my_setAlignment( sheet, range, values, lastRow, lastColumn );
  my_freeze( sheet );
}

/** ----------------------------------------------------------------------------
* Set Font Styles
*/
function my_setFontStyles( sheet, range, values, lastRow, lastColumn ) {
  
  range
  .setFontWeight( 'normal' )
  .setFontFamily( 'Nanum Gothic Coding' )
  .setFontSize( 10 );
  
  sheet
  .getRange( 1, 1, 1, lastColumn )
  .setFontWeight( 'bold' );
  
  for ( var i = 0; i < lastColumn; i++ ) {
    if( values[0][i] === '#' ) {
      var cells = sheet.getRange( 1, i+1, lastRow );
      cells.setNumberFormat("##00");
    }
    else if(values[0][i] === 'U' ) {
      var cells = sheet.getRange( 1, i+1, lastRow );
      cells.setNumberFormat("#0");
    }
  }
}

/** ----------------------------------------------------------------------------
* Set Alignment
*/
function my_setAlignment( sheet, range, values, lastRow, lastColumn ) {
  
  range
  .setHorizontalAlignment( 'left' )
  .setVerticalAlignment( 'middle' );
  
//  for ( var i = 0; i < lastColumn; i++ ) {
//    if( values[0][i].match(/^(.|Size|^.* Link|Edited|)$/g) ) {
//      sheet.getRange( 1, i+1, lastRow ).setHorizontalAlignment( "center" );
//    }
//  }
  
  var search1 = '\\#';
  var search2 = '.*\\(Y\\/N\\)'
  var regex = new RegExp( '^(' + search1 + '|' + search2 + ')$', 'g' );
  
  for ( var i = 0; i < lastColumn; i++ ) {
    if( String(values[0][i]).match(regex) ) {
      sheet.getRange( 1, i+1, lastRow ).setHorizontalAlignment( "center" );
    }
  }
}

/** ----------------------------------------------------------------------------
* Freeze
*/
function my_freeze( sheet ) {
  sheet.setFrozenRows( 1 );
  sheet.setFrozenColumns( 1 );
}
```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
