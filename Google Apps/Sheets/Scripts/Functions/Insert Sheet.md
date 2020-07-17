## Insert Sheet

``` javascript
function My_insertSheet() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName( 'Sheet2' );

    if ( !sheet ) {
    	sheet = ss.insertSheet( 'Sheet2' );
    }
}
```