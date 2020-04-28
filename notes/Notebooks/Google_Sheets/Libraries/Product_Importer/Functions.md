---
tags: [Notebooks/Google_Sheets/Libraries/Product_Importer]
title: Functions
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-21T09:52:49.916Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)

## Functions

```js
function my_shareFormula() {
  var sheet       = SpreadsheetApp.getActiveSheet();
  var cell        = sheet.getActiveCell();
  var col         = cell.getColumn();
  var destination = sheet.getRange( 2, col, sheet.getLastRow() - 1, 1 );
  
  cell.copyTo( destination );
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)
