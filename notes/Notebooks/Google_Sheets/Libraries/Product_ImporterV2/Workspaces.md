---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: Workspaces
created: '2019-10-21T09:52:49.914Z'
modified: '2019-11-03T19:16:25.667Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## Workspaces

```js
/** ----------------------------------------------------------------------------
* Show Default
*/
function my_showDefault( sheet ) {
  sheet = sheet || SpreadsheetApp.getActiveSheet();
  
  sheet.showColumns( 1, sheet.getLastColumn() );
  sheet.getRange(1, 1).activate();
}

/** ----------------------------------------------------------------------------
* Show Slim
*/
function my_showSlim( sheet, range, values, length ) {
  sheet = sheet || SpreadsheetApp.getActiveSheet();
  range = range || sheet.getRange( 1, 1, 1, sheet.getLastColumn() );
  values = values || range.getValues();
  length = length || values[0].length;
  
  my_showDefault( sheet );
  
  sheet.hideColumns(2, 7);
  sheet.hideColumns(13, 13);
  sheet.hideColumns(31, 14);
  sheet.getRange(1, 9).activate();
}

/** ----------------------------------------------------------------------------
* Show Simple
*/
function my_showSimple() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getRange( 1, 1, 1, sheet.getLastColumn() );
  var values = range.getValues();
  var length = values[0].length;
  
  my_showSlim(  sheet, range, values, length  );
  
  for( var i = 0; i < length; i++ ) {
    if( values[0][i].match(/^.*(#|u|id)$/gi) ) {
      sheet.hideColumns( i+1 )
    }
  }
  sheet.hideColumns(42, 2);
  sheet.hideColumns(49, 16);
  sheet.getRange(1, 7).activate();
  
  for( var i = 46; i < length; i++ ) {
    if( values[0][i].match(/^.* Link/g) ) {
      sheet.showColumns( i+1 )
    }
  }
}

/** ----------------------------------------------------------------------------
* Show Vimeo
*/
function my_showVimeo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getDataRange();
  var values = range.getValues();
  var length = values[0].length;
  
  sheet.showColumns(1, length);
  
  sheet.hideColumns(2, 45);
  sheet.hideColumns(56, 16);
  
}

/** ----------------------------------------------------------------------------
* Show Archive
*/
function my_showArchive() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange( 1, 1, 1, sheet.getLastColumn() );
  var ranges = range.getValues();
  var length = ranges[0].length;
  
  for( var i = 0; i < length; i++ ) {
    if( ranges[0][i].match(/^((?:.*(Typ|Nam)e)|(?:Filename)|(?:Size)|(?:File Path))$/g) ) {
      sheet.showColumns( i+1 )
    } else {
      sheet.hideColumns( i+1 )
    }
  }
  sheet.hideColumns(1, 6);
  sheet.hideColumns(9, 14);
  sheet.hideColumns(28, 14);
  sheet.getRange(1, 7).activate();
}

/** ----------------------------------------------------------------------------
* Show List
*/
function my_showList() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange( 1, 1, 1, sheet.getLastColumn() );
  var ranges = range.getValues();
  var length = ranges[0].length;
  
  for( var i = 0; i < length; i++ ) {
    if( ranges[0][i].match(/^.*(Section|Type|Name|Path)$/g) ) {
      sheet.showColumns( i+1 )
    } else {
      sheet.hideColumns( i+1 )
    }
  }
  sheet.hideColumns(1, 6);
  sheet.hideColumns(9, 14);
  sheet.hideColumns(28, 14);
  sheet.getRange(1, 7).activate();
}
```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
