# Triggers
```JavaScript
//--------------------------------------------------------------------------------
// Data Level
//--------------------------------------------------------------------------------

var TRIGGER_DB = {
  BUILD : {
    FOR_DOCUMENT      : "forDocument",
    FOR_FORM          : "forForm",
    FOR_SPREADSHEET   : "forSpreadsheet",
    FOR_USER_CALENDAR : "forUserCalendar"
  },
  FIRE : {
    ON_CHANGE         : "onChange",
    ON_EDIT           : "onEdit",
    ON_FORM_SUBMIT    : "formSubmit",
    ON_OPEN           : "onOpen"
  }
}

Object.freeze(TRIGGER_DB);

//--------------------------------------------------------------------------------
// Abstraction Level 1
//--------------------------------------------------------------------------------

function MY_setTriggers() {
  MY_deleteTriggers();
  
  MY_createTrigger("MY_onOpenCreateMenu",
                   "18fpCXjC55bSiESECibtKp_OcRseRoqTfg0wlRZTZEnA",
                   TRIGGER_DB.BUILD.FOR_SPREADSHEET,
                   TRIGGER_DB.FIRE.ON_OPEN);       
}

//--------------------------------------------------------------------------------
// Abstraction Level 2
//--------------------------------------------------------------------------------

function MY_deleteTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  
  for ( var i = 0; i < triggers.length; i++ ) {
    ScriptApp.deleteTrigger( triggers[ i ] );   
  }
}

//--------------------------------------------------------------------------------

function MY_createTrigger( name, key, buildFor, fireOn ) {
  ScriptApp
  .newTrigger( name )
  [ buildFor ]( key )
  [ fireOn ]()
  .create();
}

//--------------------------------------------------------------------------------
```