---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: Functions
created: '2019-10-21T09:52:49.914Z'
modified: '2019-11-03T17:14:13.020Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## Functions

```js
/** ----------------------------------------------------------------------------
* Share Formula
*/
function my_shareFormula() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = sheet.getActiveCell();
  var col = cell.getColumn();
  var destination = sheet.getRange( 2, col, sheet.getLastRow() - 1, 1 );
  
  cell.copyTo( destination );
}

/** ----------------------------------------------------------------------------
* Reset Warnings
*/
function my_resetWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.getRange( 2, 1, sheet.getLastRow()-1, 1 ).setValue( '' );
}

/** ----------------------------------------------------------------------------
* Show Warnings
*/
function my_showWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.showColumns(1, 1);
  sheet.setFrozenColumns(1)
}

/** ----------------------------------------------------------------------------
* Hide Warnings
*/
function my_hideWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.hideColumns(1, 1);
  sheet.setFrozenColumns(0);
}

/** ----------------------------------------------------------------------------
* Show Data
*/
function my_showData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lessonTitles = ss.getSheetByName( 'Data - Lesson Titles' );
  var topicTypes = ss.getSheetByName( 'Data - Topic Types' );
  var lessonTypes = ss.getSheetByName( 'Data - Lesson Types' );
  
  lessonTitles.showSheet();
  topicTypes.showSheet();
  lessonTypes.showSheet();
}

/** ----------------------------------------------------------------------------
* Hide Data
*/
function my_hideData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lessonTitles = ss.getSheetByName( 'Data - Lesson Titles' );
  var topicTypes = ss.getSheetByName( 'Data - Topic Types' );
  var lessonTypes = ss.getSheetByName( 'Data - Lesson Types' );
  
  lessonTitles.hideSheet();
  topicTypes.hideSheet();
  lessonTypes.hideSheet();
}

/** ----------------------------------------------------------------------------
* Sort Data
*/
function my_sortData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getRange( 2, 1, sheet.getMaxRows()-1, sheet.getMaxColumns() );
  
  var sortOrder = [
    { column: 11, ascending: true },
    { column: 9, ascending: true },
    { column: 13, ascending: true },
    { column: 28, ascending: true },
    { column: 30, ascending: true }
  ];
  
  range.sort( sortOrder );
}

/** ----------------------------------------------------------------------------
* Add New Line
*/
function my_addNewColumn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var cell = sheet.getActiveCell();
  var row = cell.getRow();
  
  var columnList = [
    'ARRAYSHIFT',
    'Course Title',
    'Acronym',
    '#',
    'U',
    'Enable Video Progresson(Y/N)',
    'Auto start Video (Y/N)',
    'Show video Control(Y/N)',
    'When To show(After/Before)',
    'Auto Complete Lesson (Y/N)',
    'Hide Complete Button (Y/N)',
    'Allow Comment (Y/N)',
    'Lesson Status (Publish/Draft)',
    'Enable Video Progresson(Y/N)',
    'Auto start Video (Y/N)',
    'Show video Control(Y/N)',
    'When To show(After/Before)',
    'Auto Complete Lesson (Y/N)',
    'Hide Complete Button (Y/N)',
    'Allow Comment (Y/N)',
    'Topic Status (Publish/Draft)',
    'File Path',
    'Vimeo Title',
    'Vimeo Link',
    'Vimeo Settings',
    'D Link',
    'Transcription Link',
    'Outline Link',
    'Slides Link',
  ];
  
  sheet.insertRowAfter( row );
  
  var lastColumn = sheet.getLastColumn();
  var values = sheet.getRange( 1, 1, 1, lastColumn ).getValues();
  values[0].unshift('ARRAYSHIFT');
  var destination = "";

  for( var i = 1; i < lastColumn+1; i++ ) {
    Logger.log('---');
    Logger.log(i);
    for( var j = 1; j < columnList.length; j++ ) {
      if( values[0][i] === columnList[j] ) {
        Logger.log(j);
        destination = sheet.getRange( row+1, i );
        cell = sheet.getRange( 2, i )
        cell.copyTo( destination );
      }
    }
  }
}
/** ----------------------------------------------------------------------------
* Share Formula
*/
function my_shareFormula() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = sheet.getActiveCell();
  var col = cell.getColumn();
  var destination = sheet.getRange( 2, col, sheet.getLastRow() - 1, 1 );
  
  cell.copyTo( destination );
}

/** ----------------------------------------------------------------------------
* Reset Warnings
*/
function my_resetWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.getRange( 2, 1, sheet.getLastRow()-1, 1 ).setValue( '' );
}

/** ----------------------------------------------------------------------------
* Show Warnings
*/
function my_showWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.showColumns(1, 1);
  sheet.setFrozenColumns(1)
}

/** ----------------------------------------------------------------------------
* Hide Warnings
*/
function my_hideWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.hideColumns(1, 1);
  sheet.setFrozenColumns(0);
}

/** ----------------------------------------------------------------------------
* Show Data
*/
function my_showData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lessonTitles = ss.getSheetByName( 'Data - Lesson Titles' );
  var topicTypes = ss.getSheetByName( 'Data - Topic Types' );
  var lessonTypes = ss.getSheetByName( 'Data - Lesson Types' );
  
  lessonTitles.showSheet();
  topicTypes.showSheet();
  lessonTypes.showSheet();
}

/** ----------------------------------------------------------------------------
* Hide Data
*/
function my_hideData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lessonTitles = ss.getSheetByName( 'Data - Lesson Titles' );
  var topicTypes = ss.getSheetByName( 'Data - Topic Types' );
  var lessonTypes = ss.getSheetByName( 'Data - Lesson Types' );
  
  lessonTitles.hideSheet();
  topicTypes.hideSheet();
  lessonTypes.hideSheet();
}

/** ----------------------------------------------------------------------------
* Sort Data
*/
function my_sortData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getRange( 2, 1, sheet.getMaxRows()-1, sheet.getMaxColumns() );
  
  var sortOrder = [
    { column: 11, ascending: true },
    { column: 9, ascending: true },
    { column: 13, ascending: true },
    { column: 28, ascending: true },
    { column: 30, ascending: true }
  ];
  
  range.sort( sortOrder );
}

/** ----------------------------------------------------------------------------
* Add New Line
*/
function my_addNewColumn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var cell = sheet.getActiveCell();
  var row = cell.getRow();
  
  var columnList = [
    'ARRAYSHIFT',
    'Course Title',
    'Acronym',
    '#',
    'U',
    'Enable Video Progresson(Y/N)',
    'Auto start Video (Y/N)',
    'Show video Control(Y/N)',
    'When To show(After/Before)',
    'Auto Complete Lesson (Y/N)',
    'Hide Complete Button (Y/N)',
    'Allow Comment (Y/N)',
    'Lesson Status (Publish/Draft)',
    'Enable Video Progresson(Y/N)',
    'Auto start Video (Y/N)',
    'Show video Control(Y/N)',
    'When To show(After/Before)',
    'Auto Complete Lesson (Y/N)',
    'Hide Complete Button (Y/N)',
    'Allow Comment (Y/N)',
    'Topic Status (Publish/Draft)',
    'File Path',
    'Vimeo Title',
    'Vimeo Link',
    'Vimeo Settings',
    'D Link',
    'Transcription Link',
    'Outline Link',
    'Slides Link',
  ];
  
  sheet.insertRowAfter( row );
  
  var lastColumn = sheet.getLastColumn();
  var values = sheet.getRange( 1, 1, 1, lastColumn ).getValues();
  values[0].unshift('ARRAYSHIFT');
  var destination = "";

  for( var i = 1; i < lastColumn+1; i++ ) {
    Logger.log('---');
    Logger.log(i);
    for( var j = 1; j < columnList.length; j++ ) {
      if( values[0][i] === columnList[j] ) {
        Logger.log(j);
        destination = sheet.getRange( row+1, i );
        cell = sheet.getRange( 2, i )
        cell.copyTo( destination );
      }
    }
  }
}
/** ----------------------------------------------------------------------------
* Share Formula
*/
function my_shareFormula() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = sheet.getActiveCell();
  var col = cell.getColumn();
  var destination = sheet.getRange( 2, col, sheet.getLastRow() - 1, 1 );
  
  cell.copyTo( destination );
}

/** ----------------------------------------------------------------------------
* Reset Warnings
*/
function my_resetWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.getRange( 2, 1, sheet.getLastRow()-1, 1 ).setValue( '' );
}

/** ----------------------------------------------------------------------------
* Show Warnings
*/
function my_showWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.showColumns(1, 1);
  sheet.setFrozenColumns(1)
}

/** ----------------------------------------------------------------------------
* Hide Warnings
*/
function my_hideWarnings() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  
  sheet.hideColumns(1, 1);
  sheet.setFrozenColumns(0);
}

/** ----------------------------------------------------------------------------
* Show Data
*/
function my_showData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lessonTitles = ss.getSheetByName( 'Data - Lesson Titles' );
  var topicTypes = ss.getSheetByName( 'Data - Topic Types' );
  var lessonTypes = ss.getSheetByName( 'Data - Lesson Types' );
  
  lessonTitles.showSheet();
  topicTypes.showSheet();
  lessonTypes.showSheet();
}

/** ----------------------------------------------------------------------------
* Hide Data
*/
function my_hideData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lessonTitles = ss.getSheetByName( 'Data - Lesson Titles' );
  var topicTypes = ss.getSheetByName( 'Data - Topic Types' );
  var lessonTypes = ss.getSheetByName( 'Data - Lesson Types' );
  
  lessonTitles.hideSheet();
  topicTypes.hideSheet();
  lessonTypes.hideSheet();
}

/** ----------------------------------------------------------------------------
* Sort Data
*/
function my_sortData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getRange( 2, 1, sheet.getMaxRows()-1, sheet.getMaxColumns() );
  
  var sortOrder = [
    { column: 11, ascending: true },
    { column: 9, ascending: true },
    { column: 13, ascending: true },
    { column: 28, ascending: true },
    { column: 30, ascending: true }
  ];
  
  range.sort( sortOrder );
}

/** ----------------------------------------------------------------------------
* Add New Line
*/
function my_addNewColumn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var cell = sheet.getActiveCell();
  var row = cell.getRow();
  
  var columnList = [
    'ARRAYSHIFT',
    'Course Title',
    'Acronym',
    '#',
    'U',
    'Enable Video Progresson(Y/N)',
    'Auto start Video (Y/N)',
    'Show video Control(Y/N)',
    'When To show(After/Before)',
    'Auto Complete Lesson (Y/N)',
    'Hide Complete Button (Y/N)',
    'Allow Comment (Y/N)',
    'Lesson Status (Publish/Draft)',
    'Enable Video Progresson(Y/N)',
    'Auto start Video (Y/N)',
    'Show video Control(Y/N)',
    'When To show(After/Before)',
    'Auto Complete Lesson (Y/N)',
    'Hide Complete Button (Y/N)',
    'Allow Comment (Y/N)',
    'Topic Status (Publish/Draft)',
    'File Path',
    'Vimeo Title',
    'Vimeo Link',
    'Vimeo Settings',
    'D Link',
    'Transcription Link',
    'Outline Link',
    'Slides Link',
  ];
  
  sheet.insertRowAfter( row );
  
  var lastColumn = sheet.getLastColumn();
  var values = sheet.getRange( 1, 1, 1, lastColumn ).getValues();
  values[0].unshift('ARRAYSHIFT');
  var destination = "";

  for( var i = 1; i < lastColumn+1; i++ ) {
    Logger.log('---');
    Logger.log(i);
    for( var j = 1; j < columnList.length; j++ ) {
      if( values[0][i] === columnList[j] ) {
        Logger.log(j);
        destination = sheet.getRange( row+1, i );
        cell = sheet.getRange( 2, i )
        cell.copyTo( destination );
      }
    }
  }
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
