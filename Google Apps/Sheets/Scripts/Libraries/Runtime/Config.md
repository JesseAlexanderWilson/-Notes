``` js
/** ----------------------------------------------------------------------------
 * Run Function
 */
function RunFunction( select ) {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Sheet1' );
  var range = sheet.getDataRange();

  PropertiesService.getScriptProperties().deleteProperty( 'runtimeCount' );
  //var runtimeCountStart = new Date();

  if ( select == 1 ) {
    var runtimeCountStart = new Date();
    Function1();
  } else {
    var runtimeCountStart = new Date();
    Function2();
  }

  RuntimeCountStop( runtimeCountStart );
  return PropertiesService.getScriptProperties().getProperty( 'runtimeCount' );
}

/** ----------------------------------------------------------------------------
 * Runtime Count Stop
 */
function RuntimeCountStop( start ) {
  var props          = PropertiesService.getScriptProperties();
  var currentRuntime = props.getProperty( 'runtimeCount' );
  var stop           = new Date();
  var newRuntime     = Number( stop ) - Number( start );
  var setRuntime     = { runtimeCount: newRuntime };

  props.setProperties( setRuntime );
}

/** ----------------------------------------------------------------------------
 * Multi Array Sum
 */
function MultiArraySum( array, index ) {
  var result = array.map( function ( v ) {
    return v[ index ];
  } ).reduce( function ( a, b ) {
    return Number( a ) + Number( b );
  } );

  return result;
}

```
