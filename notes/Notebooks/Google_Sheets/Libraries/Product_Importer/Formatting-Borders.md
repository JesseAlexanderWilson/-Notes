---
tags: [Notebooks/Google_Sheets/Libraries/Product_Importer]
title: Formatting-Borders
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-22T13:34:13.920Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)

## Formatting-Borders

```js
function my_setBorderStyles( doc ) {
  doc = doc || my_getDocObj();
  
  doc.sheet
  .getRange( doc.firstRow, doc.firstColumn, doc.lastRow, doc.lastColumn )
  .setBorder( false, false, false, false, false, false );
  
  for ( var i = 0; i < doc.lastColumn; i++ ) {
    if( String(doc.values[0][i]).match(/U/g) ) {
      doc.sheet
      .getRange( doc.firstRow, i+1, doc.lastRow )
      .setBorder( null, null, null, true, null, null, null, SpreadsheetApp.BorderStyle.SOLID );
    }
    else if( String(doc.values[0][i]).match(/Filename/g) ) {
      doc.sheet
      .getRange( doc.firstRow, i+1, doc.lastRow )
      .setBorder( null, true, null, null, null, null, null, SpreadsheetApp.BorderStyle.SOLID_THICK );
    }
  }
  
  for( var i = 0; i < doc.lastColumn-1; i++) {
    if( doc.values[0][i] === 'Lesson Title' ) {
      var loc = i;
      break;
    }
  }
  
  for( var i = 1; i < doc.lastRow-1; i++) {
    if( doc.values[i][loc] !== doc.values[i+1][loc] ) {
      doc.sheet
      .getRange( i+1, doc.firstColumn, 1, doc.lastColumn )
      .setBorder( null, null, true, null, null, null, null, SpreadsheetApp.BorderStyle.SOLID );
    }
  }
  
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)
