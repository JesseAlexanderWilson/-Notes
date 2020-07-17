---
tags: [Notebooks/Google_Sheets/Libraries/Runtime]
title: Record
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-21T10:15:07.419Z'
---

``` js
/** ----------------------------------------------------------------------------
 * Record Runtime
 */
function RecordRuntime() {
  var array1 = [];
  var array2 = [];
  var arrayLength = 15;
  var arrayWidth = 2;

  for ( var i = 1; i <= arrayLength; i++ ) {
    array1.push( [ i, RunFunction( 1 ) ] );
    array2.push( [ i, RunFunction( 2 ) ] );
  }

  var temp1 = MultiArraySum( array1, 1 );
  var temp2 = MultiArraySum( array2, 1 );
  var totals = [ temp1, temp2 ];

  temp1 = totals[ 0 ] / arrayLength;
  temp2 = totals[ 1 ] / arrayLength;
  var averages = [ temp1, temp2 ];

  var medianIndex = Math.floor( arrayLength / 2 - 0.5 );
  temp1 = array1[ medianIndex ][ 1 ]
  temp2 = array2[ medianIndex ][ 1 ]
  var medians = [ temp1, temp2 ];

  temp1 = ( totals[ 0 ] - totals[ 1 ] ) / totals[ 0 ];
  temp2 = ( totals[ 1 ] - totals[ 0 ] ) / totals[ 1 ];
  var percents = [ temp1, temp2 ];

  var values = [
    totals,
    averages,
    medians,
    percents
  ];

  var sideCellHeaders = [
    [ 'Total' ],
    [ 'Average' ],
    [ 'Median' ],
    [ 'Efficiency %' ]
  ];

  var topCellHeaders = [
    [ 'Function 1', 'Function 2' ]
  ];

  //--------------------------------------------------------------------------

  var sheetName = 'Runtime';
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( sheetName );

  if ( sheet ) {
    ss.deleteSheet( ss.getSheetByName( sheetName ) )
  }
  ss.insertSheet( sheetName );

  var sheet = ss.getSheetByName( sheetName );

  sheet.setColumnWidth( 1, 21 );
  sheet.setColumnWidth( 2, 80 );
  sheet.setColumnWidth( 3, 26 );
  sheet.setColumnWidth( 4, 21 );
  sheet.setColumnWidth( 5, 80 );
  sheet.setColumnWidth( 6, 26 );

  var rangeList = sheet.getRangeList( [ 'A1:B1', 'D1:E1' ] );

  var i = 0;
  for each( var range in rangeList.getRanges() ) {
    range.merge()
      .setValue( topCellHeaders[ 0 ][ i++ ] )
      .setHorizontalAlignment( 'center' )
      .setBackground( '#f3f3f3' )
      .setBorder( true, true, true, true, null, null )
      .setHorizontalAlignment( 'center' );
  }

  sheet.getRange( 2, 1, arrayLength, arrayWidth )
    .setValues( array1 )
    .setBorder( true, true, true, true, true, true )
    .setHorizontalAlignment( 'center' );

  sheet.getRange( 2, 4, arrayLength, arrayWidth )
    .setValues( array2 )
    .setBorder( true, true, true, true, true, true )
    .setHorizontalAlignment( 'center' );

  sheet.getRange( 1, 8, 1, 2 )
    .setValues( topCellHeaders )
    .setBorder( true, true, true, true, true, true )
    .setBackground( '#f3f3f3' );

  sheet.getRange( 2, 7, 4, 1 )
    .setValues( sideCellHeaders )
    .setBorder( true, true, true, true, true, true )
    .setBackground( '#f3f3f3' );

  sheet.getRange( 2, 8, 4, 2 )
    .setValues( values )
    .setBorder( true, true, true, true, true, true )
    .setNumberFormat( '###0' );

  sheet.getRange( 5, 8, 1, 2 ).setNumberFormat( '###0.%' );
}

```
