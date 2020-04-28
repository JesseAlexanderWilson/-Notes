---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: WP_Import-My_Sheet
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-27T02:52:17.751Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## WP_Import-My_Sheet

``` js
/** ============================================================================
 * Sheet
 */
function My_Sheet( name ) {

  // ===========================================================================
  // Fields  
  // ===========================================================================

  this.ss   = SpreadsheetApp.getActiveSpreadsheet();
  this.name = name;

  // ===========================================================================
  // Methods
  // ===========================================================================

  /** --------------------------------------------------------------------------
   * Read
   */
  this.read = function () {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName( this.name );
  }

  /** --------------------------------------------------------------------------
   * Insert
   */
  this.insert = function () {
    if ( this.read( this.name ) ) {
      this.ss.deleteSheet( this.read( this.name ) );
    }

    this.ss.insertSheet( this.name );
  }

  /** --------------------------------------------------------------------------
   * Count Body Rows
   */
  this.bodyRows = function () {
    var sheet   = this.read( this.name );
    var maxRows = sheet.getMaxRows();

    return sheet.getMaxRows() - 1;
  }

  /** ----------------------------------------------------------------------------
   * Remove Empty Rows
   */
  this.removeEmptyRows = function () {
    var sheet   = this.read( this.name );
    var maxRows = sheet.getMaxRows();
    var lastRow = sheet.getLastRow();

    sheet.deleteRows( lastRow + 1, maxRows - lastRow );
  }

  /** ----------------------------------------------------------------------------
   * Auto Resize Columns
   */
  this.autoResizeColumns = function () {
    var sheet      = this.read( this.name );
    var maxColumns = sheet.getMaxColumns();

    sheet.autoResizeColumns( 1, maxColumns );
  }

  /** --------------------------------------------------------------------------
   * Color Header Row
   */
  this.colorHeaderRow = function () {
    var sheet  = this.read( this.name );
    var titles = [
      my_getHeaderTitles()
    ];

    sheet
      .getRange( 1, 1, 1, 36 )
      .setValues( titles );

    sheet
      .getRange( 1, 1, 1, 6 )
      .setBackground( COLOR.green );

    sheet
      .getRange( 1, 5, 1, 1 )
      .setBackground( COLOR.orange );

    sheet
      .getRange( 1, 7, 1, 4 )
      .setBackground( COLOR.purple );

    sheet
      .getRange( 1, 11, 1, 8 )
      .setBackground( COLOR.red );

    sheet
      .getRange( 1, 19, 1, 1 )
      .setBackground( COLOR.purple );

    sheet
      .getRange( 1, 20, 1, 1 )
      .setBackground( COLOR.orange );

    sheet
      .getRange( 1, 21, 1, 1 )
      .setBackground( COLOR.green );

    sheet
      .getRange( 1, 22, 1, 4 )
      .setBackground( COLOR.yellow );

    sheet
      .getRange( 1, 26, 1, 8 )
      .setBackground( COLOR.orange );

    sheet
      .getRange( 1, 34, 1, 1 )
      .setBackground( COLOR.yellow );

    sheet
      .getRange( 1, 35, 1, 1 )
      .setBackground( COLOR.orange );

    sheet
      .getRange( 1, 36, 1, 1 )
      .setBackground( COLOR.green );
  }

  // ===========================================================================

}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
