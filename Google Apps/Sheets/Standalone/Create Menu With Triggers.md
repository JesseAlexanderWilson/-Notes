---
tags: [Notebooks/Google_Sheets/Standalone]
title: Create Menu With Triggers
created: '2019-10-21T18:34:21.177Z'
modified: '2019-10-21T18:34:23.667Z'
---

## Triggers

``` js
//Insert code below and then run function 'My_setTriggers'.

//------------------------------------------------------------------------------
// Data Level
//------------------------------------------------------------------------------

var TRIGGER_DB = {
  BUILD: {
    FOR_DOCUMENT: "forDocument",
    FOR_FORM: "forForm",
    FOR_SPREADSHEET: "forSpreadsheet",
    FOR_USER_CALENDAR: "forUserCalendar"
  },
  FIRE: {
    ON_CHANGE: "onChange",
    ON_EDIT: "onEdit",
    ON_FORM_SUBMIT: "formSubmit",
    ON_OPEN: "onOpen"
  }
}

Object.freeze( TRIGGER_DB );

//------------------------------------------------------------------------------
// Abstraction Level 1
//------------------------------------------------------------------------------

function MY_setTriggers() {
  MY_deleteTriggers();

  MY_createTrigger(
    "MY_onOpenCreateMenu",
    "1tNsjrUMJsOLJkWv0Kh-6V8yLBnFEpMQE1GiEokowV0k",
    TRIGGER_DB.BUILD.FOR_SPREADSHEET,
    TRIGGER_DB.FIRE.ON_OPEN
  );
}

//------------------------------------------------------------------------------
// Abstraction Level 2
//------------------------------------------------------------------------------

function MY_deleteTriggers() {
  var triggers = ScriptApp.getProjectTriggers();

  for ( var i = 0; i < triggers.length; i++ ) {
    ScriptApp.deleteTrigger( triggers[ i ] );
  }
}

//------------------------------------------------------------------------------

function MY_createTrigger( name, key, buildFor, fireOn ) {
  ScriptApp
    .newTrigger( name )[ buildFor ]( key )[ fireOn ]()
    .create();
}

```

## Custom Menu Item

``` js
function OnOpenCreateMenu() {

    var menu;
    var subMenu;
    var ui = SpreadsheetApp.getUi();

    // Menu
    menu = ui.createMenu( 'Menu_Name' )
    .addItem( 'Menu_Item_Name', 'Function_Name' )
    .addSeparator();

    // Sub Menu 1
    subMenu = ui.createMenu( 'Sub_Menu_Name' )
    .addItem( 'Menu_Item_Name', 'Function_Name' )
    .addSeparator()
    .addItem( 'Menu_Item_Name', 'Function_Name' )
    .addItem( 'Menu_Item_Name', 'Function_Name' );
    menu.addSubMenu( subMenu );

    // Sub Menu 2
    subMenu = ui.createMenu( 'Sub_Menu_Name' )
    .addItem( 'Menu_Item_Name', 'Function_Name' )
    .addSeparator()
    .addItem( 'Menu_Item_Name', 'Function_Name' )
    .addItem( 'Menu_Item_Name', 'Function_Name' );

    // Sub-Sub Menu 1
    subMenu = ui.createMenu( 'Sub_Menu_Name' )
    .addItem( 'Menu_Item_Name', 'Function_Name' )
    .addSeparator()
    .addItem( 'Menu_Item_Name', 'Function_Name' )
    .addItem( 'Menu_Item_Name', 'Function_Name' );
    subMenu.addSubMenu( subMenu );
    menu.addSubMenu( subMenu );

    // Menu 2
    menu.addItem( 'Menu_Item_Name', 'Function_Name' );
    menu.addToUi();

```
