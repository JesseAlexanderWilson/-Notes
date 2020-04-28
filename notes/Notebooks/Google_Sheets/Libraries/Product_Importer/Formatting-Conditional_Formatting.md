---
tags: [Notebooks/Google_Sheets/Libraries/Product_Importer]
title: Formatting-Conditional_Formatting
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-22T13:33:56.360Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)

## Formatting-Conditional_Formatting

```js
function my_setConditionalFormatting( doc ) {
  doc = doc || my_getDocObj();
  
  var theme = my_customTheme( 'index' );
  var rules = doc.sheet.getConditionalFormatRules();
  
  doc.sheet.clearConditionalFormatRules();
  
  //------------------------------------------------------------------------------
  
  var ranges = [];
  for( var i = 0; i < doc.lastColumn; i++ ) {
    if( doc.values[0][i] === 'U' ) {
      ranges.push(
        doc.sheet.getRange( doc.firstRow+1, i+1, doc.lastRow-1, 1 )
      )
    }
  }
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo( 1 )
    .setBackground( theme.alert.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo( 0 )
    .setBackground( theme.alert.warning )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( '-' )
    .setBackground( theme.alert.warning )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan( 1 )
    .setBackground( theme.alert.danger )
    .setRanges( ranges )
    .build()
  );
  
  //----------------------------------------------------------------------------
  
  ranges = [];
  for( var i = 0; i < doc.lastColumn; i++ ) {
    if( String(doc.values[0][i]).match(/^Size$/g)) {
      ranges.push(
        doc.sheet.getRange( doc.firstRow+1, i+1, doc.lastRow-1, 1 )
      )
    }
  }
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'R' )
    .setBackground( theme.alert.danger )
    .setRanges( ranges )
    .build()
  );
  
  //----------------------------------------------------------------------------
  
  ranges = [];
  for( var i = 0; i < doc.lastColumn; i++ ) {
    if( String(doc.values[0][i]).match(/^Edited$/g)) {
      ranges.push(
        doc.sheet.getRange( doc.firstRow+1, i+1, doc.lastRow-1, 1 )
      )
    }
  }
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'T' )
    .setBackground( theme.alert.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'F' )
    .setBackground( theme.alert.danger )
    .setRanges( ranges )
    .build()
  );
  
  //----------------------------------------------------------------------------
  
  doc.sheet.setConditionalFormatRules( rules );
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)
