## For Each Loop

### Code Explanation

``` javascript
for ( var instance in list ) {
	//do stuff;
}
```

### Working Example

``` javascript
function My_logFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName( 'sheetname' );
    var range = sheet.getDataRange();
    var values = range.getValues();

    for ( var v in values ) {
    	Logger.log( v );
    }
```