---
tags: [Notebooks/Google_Sheets/Libraries/Product_Importer]
title: Formatting
created: '2019-10-21T09:52:27.475Z'
modified: '2019-10-21T11:49:08.121Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)

## Formatting

```js
function my_setAllFormatting() {
  var doc = my_getDocObj();

  my_setBandings( 'LIGHT', true, false, doc )
  my_setConditionalFormatting( doc );
  my_setCellStyles( doc );
  my_setBorderStyles( doc );
}

//------------------------------------------------------------------------------

function my_getDocObj() {
  var doc = {};
  doc.plainRows    = 0;
  doc.plainColumns = 0;
  doc.sheet        = SpreadsheetApp.getActiveSpreadsheet().getSheetByName( 'Content' );

  doc.firstRow     = doc.plainRows + 1
  doc.firstColumn  = doc.plainColumns + 1;
  doc.lastRow      = doc.sheet.getLastRow() - doc.plainRows;
  doc.lastColumn   = doc.sheet.getLastColumn() - doc.plainColumns;
  
  doc.range        = doc.sheet.getRange( doc.firstRow, doc.firstColumn, doc.lastRow, doc.lastColumn );
  doc.values       = doc.range.getValues();
  return doc;
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)
