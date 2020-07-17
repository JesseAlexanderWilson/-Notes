---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: Formatting-Conditional_Formatting
created: '2019-10-21T09:52:49.914Z'
modified: '2019-11-03T17:14:43.337Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## Formatting-Conditional_Formatting

```js
/** ----------------------------------------------------------------------------
* Set Conditional Formatting
*/
function my_setConditionalFormatting( sheet, values ) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  
  var ranges = [];
  var rules = [];
  
  sheet.clearConditionalFormatRules();
    
  //Priority 1
  ranges = [];
  for( var i = 0; i < lastColumn; i++ ) {
    if( values[0][i] === 'U' ) {
      ranges.push(
        sheet.getRange( 1+1, i+1, lastRow-1, 1 )
      );
    }
  }  
  my_cfPriority1( rules, ranges );
  
  //Priority 2
  ranges = [];
  for( var i = 0; i < lastColumn; i++ ) {
    if( values[0][i].match(/^Edited$/g)) {
      ranges.push(
        sheet.getRange( 1+1, i+1, lastRow-1, 1 )
      );
    }
  }
  my_cfPriority2( rules, ranges );
  
  //Priority 3 + 4
  ranges = [];
  ranges.push( sheet.getRange( 2, 1, lastRow-1, lastColumn ) );
  
  my_cfPriority3( rules, ranges );
  my_cfPriority4( rules, ranges );
  
  sheet.setConditionalFormatRules( rules );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 1
*/
function my_cfPriority1( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo( 1 )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo( 0 )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( '-' )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan( 1 )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 2
*/
function my_cfPriority2( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'T' )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'F' )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
}


/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 3
*/
function my_cfPriority3( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Pass"' )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Fail"' )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Warning"' )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 4
*/
function my_cfPriority4( rules, ranges ) {
  var theme = my_cfTheme( 'introduction' );
      
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$L2="Introduction"' )
    .setBackground( theme.topic )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$AC2="Introduction"' )
    .setBackground( theme.lesson )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Theme
*/
function my_cfTheme( input ) {
  var alertTheme = {
    success: '#b7e1cd',
    warning: '#fce8b2',
    danger:  '#f4c7c3'
  };
  
  var introductionTheme = {
    lesson: '#ffff00',
    topic:  '#00ffff'
  };
  
  switch( input ) {
    case 'alert':
      var theme = alertTheme;
      break;
    case 'introduction':
      var theme = introductionTheme;
      break;
    default:
      var theme = {};
  }
  return theme;
}/** ----------------------------------------------------------------------------
* Set Conditional Formatting
*/
function my_setConditionalFormatting( sheet, values ) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  
  var ranges = [];
  var rules = [];
  
  sheet.clearConditionalFormatRules();
    
  //Priority 1
  ranges = [];
  for( var i = 0; i < lastColumn; i++ ) {
    if( values[0][i] === 'U' ) {
      ranges.push(
        sheet.getRange( 1+1, i+1, lastRow-1, 1 )
      );
    }
  }  
  my_cfPriority1( rules, ranges );
  
  //Priority 2
  ranges = [];
  for( var i = 0; i < lastColumn; i++ ) {
    if( values[0][i].match(/^Edited$/g)) {
      ranges.push(
        sheet.getRange( 1+1, i+1, lastRow-1, 1 )
      );
    }
  }
  my_cfPriority2( rules, ranges );
  
  //Priority 3 + 4
  ranges = [];
  ranges.push( sheet.getRange( 2, 1, lastRow-1, lastColumn ) );
  
  my_cfPriority3( rules, ranges );
  my_cfPriority4( rules, ranges );
  
  sheet.setConditionalFormatRules( rules );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 1
*/
function my_cfPriority1( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo( 1 )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo( 0 )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( '-' )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan( 1 )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 2
*/
function my_cfPriority2( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'T' )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'F' )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
}


/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 3
*/
function my_cfPriority3( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Pass"' )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Fail"' )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Warning"' )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 4
*/
function my_cfPriority4( rules, ranges ) {
  var theme = my_cfTheme( 'introduction' );
      
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$L2="Introduction"' )
    .setBackground( theme.topic )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$AC2="Introduction"' )
    .setBackground( theme.lesson )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Theme
*/
function my_cfTheme( input ) {
  var alertTheme = {
    success: '#b7e1cd',
    warning: '#fce8b2',
    danger:  '#f4c7c3'
  };
  
  var introductionTheme = {
    lesson: '#ffff00',
    topic:  '#00ffff'
  };
  
  switch( input ) {
    case 'alert':
      var theme = alertTheme;
      break;
    case 'introduction':
      var theme = introductionTheme;
      break;
    default:
      var theme = {};
  }
  return theme;
}/** ----------------------------------------------------------------------------
* Set Conditional Formatting
*/
function my_setConditionalFormatting( sheet, values ) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  
  var ranges = [];
  var rules = [];
  
  sheet.clearConditionalFormatRules();
    
  //Priority 1
  ranges = [];
  for( var i = 0; i < lastColumn; i++ ) {
    if( values[0][i] === 'U' ) {
      ranges.push(
        sheet.getRange( 1+1, i+1, lastRow-1, 1 )
      );
    }
  }  
  my_cfPriority1( rules, ranges );
  
  //Priority 2
  ranges = [];
  for( var i = 0; i < lastColumn; i++ ) {
    if( values[0][i].match(/^Edited$/g)) {
      ranges.push(
        sheet.getRange( 1+1, i+1, lastRow-1, 1 )
      );
    }
  }
  my_cfPriority2( rules, ranges );
  
  //Priority 3 + 4
  ranges = [];
  ranges.push( sheet.getRange( 2, 1, lastRow-1, lastColumn ) );
  
  my_cfPriority3( rules, ranges );
  my_cfPriority4( rules, ranges );
  
  sheet.setConditionalFormatRules( rules );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 1
*/
function my_cfPriority1( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo( 1 )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo( 0 )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( '-' )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan( 1 )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 2
*/
function my_cfPriority2( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'T' )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo( 'F' )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
}


/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 3
*/
function my_cfPriority3( rules, ranges ) {
  var theme = my_cfTheme( 'alert' );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Pass"' )
    .setBackground( theme.success )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Fail"' )
    .setBackground( theme.danger )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$A2="Warning"' )
    .setBackground( theme.warning )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Priority 4
*/
function my_cfPriority4( rules, ranges ) {
  var theme = my_cfTheme( 'introduction' );
      
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$L2="Introduction"' )
    .setBackground( theme.topic )
    .setRanges( ranges )
    .build()
  );
  
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied( '=$AC2="Introduction"' )
    .setBackground( theme.lesson )
    .setRanges( ranges )
    .build()
  );
}

/** ----------------------------------------------------------------------------
* Conditional Formatting Theme
*/
function my_cfTheme( input ) {
  var alertTheme = {
    success: '#b7e1cd',
    warning: '#fce8b2',
    danger:  '#f4c7c3'
  };
  
  var introductionTheme = {
    lesson: '#ffff00',
    topic:  '#00ffff'
  };
  
  switch( input ) {
    case 'alert':
      var theme = alertTheme;
      break;
    case 'introduction':
      var theme = introductionTheme;
      break;
    default:
      var theme = {};
  }
  return theme;
}
```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
