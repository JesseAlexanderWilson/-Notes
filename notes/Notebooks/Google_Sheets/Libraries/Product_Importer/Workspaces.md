---
tags: [Notebooks/Google_Sheets/Libraries/Product_Importer]
title: Workspaces
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-22T13:35:31.392Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)

## Workspaces

```js
function my_showDefault() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  sheet.showColumns( 1, sheet.getLastColumn() );
}

\\------------------------------------------------------------------------------

function my_showSimple() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange( 1, 1, 1, sheet.getLastColumn() );
  var ranges = range.getValues();
  var length = ranges[0].length;
  
  for( var i = 0; i < length; i++ ) {
    if( String(ranges[0][i]).match(/^.*(#|u|id)$/gi) ) {
      sheet.hideColumns( i+1 )
    } else {
      sheet.showColumns( i+1 )
    }
  }
}

\\------------------------------------------------------------------------------

function my_showArchive() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange( 1, 1, 1, sheet.getLastColumn() );
  var ranges = range.getValues();
  var length = ranges[0].length;

  for( var i = 0; i < length; i++ ) {
    if( String(ranges[0][i]).match(/^((?:.*(Typ|Nam)e)|(?:Filename)|(?:Size)|(?:File Path))$/g) ) {
      sheet.showColumns( i+1 )
    } else {
      sheet.hideColumns( i+1 )
    }
  }
}

\\------------------------------------------------------------------------------

function my_showList() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange( 1, 1, 1, sheet.getLastColumn() );
  var ranges = range.getValues();
  var length = ranges[0].length;
  
  for( var i = 0; i < length; i++ ) {
    if( String(ranges[0][i]).match(/^.*(Section|Type|Name|Path)$/g) ) {
      sheet.showColumns( i+1 )
    } else {
      sheet.hideColumns( i+1 )
    }
  }
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)
