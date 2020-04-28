---
tags: [Notebooks/Google_Sheets/Libraries/Product_Importer]
title: Formatting-Cell_Styles
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-22T13:34:38.801Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)

## Formatting-Cell_Styles

```js
function my_setCellStyles( doc ) {
  doc = doc || my_getDocObj();
  
  my_setFontStyles( doc );
  my_setAlignment( doc );
  my_freeze( doc.sheet, doc.plainRows, doc.plainColumns );
}

//------------------------------------------------------------------------------

function my_setFontStyles( doc ) {
  doc = doc || my_getDocObj();
  
  doc.range
  .setFontWeight( 'normal' )
  .setFontFamily( 'Nanum Gothic Coding' )
  .setFontSize( 10 );
  
  doc.sheet
  .getRange( doc.firstRow, doc.firstColumn, 1, doc.lastColumn )
  .setFontWeight( 'bold' );
  
  my_setFormat( doc );
}

//------------------------------------------------------------------------------

function my_setAlignment( doc ) {
  doc = doc || my_getDocObj();
  
  doc.range
  .setHorizontalAlignment( 'left' )
  .setVerticalAlignment( 'middle' );
  
  for ( var i = 0; i < doc.lastColumn; i++ ) {
    if( String(doc.values[0][i]).match(/^(.|Size|^.* Link|Edited|)$/g) ) {
      doc.sheet.getRange( doc.firstRow, i+1, doc.lastRow ).setHorizontalAlignment( "center" );
    }
  }
}

//------------------------------------------------------------------------------

function my_setFormat( doc ) {
  doc = doc || my_getDocObj();
  
  for ( var i = 0; i < doc.lastColumn; i++ ) {
    if( doc.values[0][i] === '#' ) {
      var cells = doc.sheet.getRange( doc.firstRow, i+1, doc.lastRow );
      cells.setNumberFormat("##00");
    }
    else if(doc.values[0][i] === 'U' ) {
      var cells = doc.sheet.getRange( doc.firstRow, i+1, doc.lastRow );
      cells.setNumberFormat("#0");
    }
  }
}

//------------------------------------------------------------------------------

function my_freeze( sheet, plainRows, plainColumns ) {
  sheet.setFrozenRows( plainRows + 1 );
  sheet.setFrozenColumns( plainColumns );
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)
