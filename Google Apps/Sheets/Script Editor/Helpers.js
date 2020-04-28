//--------------------------------------------------------------------------------

function MY_getSheets( index ) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var sheet       = spreadsheet.getSheets()[ index ];
  
  return sheet;
}

//--------------------------------------------------------------------------------

function MY_getActiveSheet() {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  
  return activeSheet;
}

//--------------------------------------------------------------------------------

function MY_getActiveSheetRange() {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  
  var row        = 1;
  var column     = 1;
  var numRows    = activeSheet.getMaxRows();
  var numColumns = activeSheet.getMaxColumns();
  
  var range = activeSheet.getRange( row, column, numRows, numColumns );
  
  return range;
}

//--------------------------------------------------------------------------------

function MY_isTemplateSheet() {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var sheetName   = activeSheet.getSheetName();
  
  var regex = /^\d\d\d\d/;
  var isTemplateSheet = regex.test( sheetName );
  
  return isTemplateSheet ? true : false;
}

//--------------------------------------------------------------------------------
// Debug
//--------------------------------------------------------------------------------

function log( variable ) {
  Logger.log( variable );
}

//--------------------------------------------------------------------------------

function DEBUG_getConditionalFormatRules() {
  var sheet = MY_getSheets( 0 );
  var rules = sheet.getConditionalFormatRules();
  
  for ( var i = 0; i < rules.length; i++ ) {
    var rule = rules[ i ];
    DEBUG_getConditionalFormatRuleRanges( rule );
  }
}

//--------------------------------------------------------------------------------

function DEBUG_getConditionalFormatRuleRanges( rule ) {
  var ranges = rule.getRanges();
  
  for ( var i = 0; i < ranges.length; i++ ) {
    var range = ranges[i].getA1Notation()
    Logger.log( rule ) ;
    Logger.log( range ) ;
  }
}

//--------------------------------------------------------------------------------