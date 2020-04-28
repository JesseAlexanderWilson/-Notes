---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: UI
created: '2019-10-21T08:57:44.606Z'
modified: '2019-11-03T17:14:24.993Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## UI

```js
/** ----------------------------------------------------------------------------
* On Open
*/
function onOpen() {
  my_initMenu();
}

/** ----------------------------------------------------------------------------
* Init Menu
*/
function my_initMenu() {
  var ui = SpreadsheetApp.getUi();

  // ===========================================================================
  // Formatting  
  // ===========================================================================
  
  var menu = ui.createMenu( 'Formatting' )
  .addItem( 'All Formatting', 'my_setAllFormatting' )
  .addSeparator()
  
  var subMenu = ui.createMenu( 'Bandings' )
  .addItem( 'Light', 'my_lightBandings' )
  .addItem( 'Dark', 'my_darkBandings' )
  .addItem( 'Success', 'my_successBandings' )
  .addItem( 'Danger', 'my_dangerBandings' )
  .addItem( 'Warning', 'my_warningBandings' )
  .addItem( 'Info', 'my_infoBandings' );
  menu.addSubMenu( subMenu );
  
//  subMenu = ui.createMenu( 'Multi Bandings' )
//  .addItem( 'Light & Dark', 'my_lightAndDarkBandings' )
//  .addItem( 'Blue & Red', 'my_blueAndRedBandings' )
//  menu.addSubMenu( subMenu );
  
  menu
  .addItem( 'Conditional Formatting', 'my_setConditionalFormatting' )
  .addSeparator()
  
  .addItem( 'Cell Styles', 'my_setCellStyles' )
  .addItem( 'Font Styles', 'my_setFontStyles' )
  .addItem( 'Alignment', 'my_setAlignment' )
  .addSeparator()
  
  .addItem( 'Borders', 'my_setBorderStyles' );
  
  menu.addToUi();
  
  // ===========================================================================
  // Functions  
  // ===========================================================================
  
  menu = ui.createMenu( 'Functions' )
  .addItem( 'Share Formula', 'my_shareFormula' )
  .addItem( 'Sort Data', 'my_sortData' )
  .addItem( 'Add Column', 'my_addNewColumn' );
  
  subMenu = ui.createMenu( 'Warnings' )
  .addItem( 'Reset', 'my_resetWarnings' )
  .addSeparator()
  
  .addItem( 'Show', 'my_showWarnings' )
  .addItem( 'hide', 'my_hideWarnings' );
  menu.addSubMenu( subMenu );
  
  subMenu = ui.createMenu( 'Data' )
  .addItem( 'Show', 'my_showData' )
  .addItem( 'Hide', 'my_hideData' );
  menu.addSubMenu( subMenu );
  
  menu.addToUi();
  
  // ===========================================================================
  // Workspaces 
  // ===========================================================================
  
  menu = ui.createMenu( 'Workspaces' )
  .addItem( 'Default', 'my_showDefault' )
  .addItem( 'Slim', 'my_showSlim' )
  .addItem( 'Simple', 'my_showSimple' )
  .addItem( 'Vimeo', 'my_showVimeo' )
  .addItem( 'List', 'my_showList' )
  .addItem( 'Archive', 'my_showArchive' );
  
  menu.addToUi();
  
  my_importMenu();
}/** ----------------------------------------------------------------------------
* On Open
*/
function onOpen() {
  my_initMenu();
}

/** ----------------------------------------------------------------------------
* Init Menu
*/
function my_initMenu() {
  var ui = SpreadsheetApp.getUi();

  // ===========================================================================
  // Formatting  
  // ===========================================================================
  
  var menu = ui.createMenu( 'Formatting' )
  .addItem( 'All Formatting', 'my_setAllFormatting' )
  .addSeparator()
  
  var subMenu = ui.createMenu( 'Bandings' )
  .addItem( 'Light', 'my_lightBandings' )
  .addItem( 'Dark', 'my_darkBandings' )
  .addItem( 'Success', 'my_successBandings' )
  .addItem( 'Danger', 'my_dangerBandings' )
  .addItem( 'Warning', 'my_warningBandings' )
  .addItem( 'Info', 'my_infoBandings' );
  menu.addSubMenu( subMenu );
  
//  subMenu = ui.createMenu( 'Multi Bandings' )
//  .addItem( 'Light & Dark', 'my_lightAndDarkBandings' )
//  .addItem( 'Blue & Red', 'my_blueAndRedBandings' )
//  menu.addSubMenu( subMenu );
  
  menu
  .addItem( 'Conditional Formatting', 'my_setConditionalFormatting' )
  .addSeparator()
  
  .addItem( 'Cell Styles', 'my_setCellStyles' )
  .addItem( 'Font Styles', 'my_setFontStyles' )
  .addItem( 'Alignment', 'my_setAlignment' )
  .addSeparator()
  
  .addItem( 'Borders', 'my_setBorderStyles' );
  
  menu.addToUi();
  
  // ===========================================================================
  // Functions  
  // ===========================================================================
  
  menu = ui.createMenu( 'Functions' )
  .addItem( 'Share Formula', 'my_shareFormula' )
  .addItem( 'Sort Data', 'my_sortData' )
  .addItem( 'Add Column', 'my_addNewColumn' );
  
  subMenu = ui.createMenu( 'Warnings' )
  .addItem( 'Reset', 'my_resetWarnings' )
  .addSeparator()
  
  .addItem( 'Show', 'my_showWarnings' )
  .addItem( 'hide', 'my_hideWarnings' );
  menu.addSubMenu( subMenu );
  
  subMenu = ui.createMenu( 'Data' )
  .addItem( 'Show', 'my_showData' )
  .addItem( 'Hide', 'my_hideData' );
  menu.addSubMenu( subMenu );
  
  menu.addToUi();
  
  // ===========================================================================
  // Workspaces 
  // ===========================================================================
  
  menu = ui.createMenu( 'Workspaces' )
  .addItem( 'Default', 'my_showDefault' )
  .addItem( 'Slim', 'my_showSlim' )
  .addItem( 'Simple', 'my_showSimple' )
  .addItem( 'Vimeo', 'my_showVimeo' )
  .addItem( 'List', 'my_showList' )
  .addItem( 'Archive', 'my_showArchive' );
  
  menu.addToUi();
  
  my_importMenu();
}/** ----------------------------------------------------------------------------
* On Open
*/
function onOpen() {
  my_initMenu();
}

/** ----------------------------------------------------------------------------
* Init Menu
*/
function my_initMenu() {
  var ui = SpreadsheetApp.getUi();

  // ===========================================================================
  // Formatting  
  // ===========================================================================
  
  var menu = ui.createMenu( 'Formatting' )
  .addItem( 'All Formatting', 'my_setAllFormatting' )
  .addSeparator()
  
  var subMenu = ui.createMenu( 'Bandings' )
  .addItem( 'Light', 'my_lightBandings' )
  .addItem( 'Dark', 'my_darkBandings' )
  .addItem( 'Success', 'my_successBandings' )
  .addItem( 'Danger', 'my_dangerBandings' )
  .addItem( 'Warning', 'my_warningBandings' )
  .addItem( 'Info', 'my_infoBandings' );
  menu.addSubMenu( subMenu );
  
//  subMenu = ui.createMenu( 'Multi Bandings' )
//  .addItem( 'Light & Dark', 'my_lightAndDarkBandings' )
//  .addItem( 'Blue & Red', 'my_blueAndRedBandings' )
//  menu.addSubMenu( subMenu );
  
  menu
  .addItem( 'Conditional Formatting', 'my_setConditionalFormatting' )
  .addSeparator()
  
  .addItem( 'Cell Styles', 'my_setCellStyles' )
  .addItem( 'Font Styles', 'my_setFontStyles' )
  .addItem( 'Alignment', 'my_setAlignment' )
  .addSeparator()
  
  .addItem( 'Borders', 'my_setBorderStyles' );
  
  menu.addToUi();
  
  // ===========================================================================
  // Functions  
  // ===========================================================================
  
  menu = ui.createMenu( 'Functions' )
  .addItem( 'Share Formula', 'my_shareFormula' )
  .addItem( 'Sort Data', 'my_sortData' )
  .addItem( 'Add Column', 'my_addNewColumn' );
  
  subMenu = ui.createMenu( 'Warnings' )
  .addItem( 'Reset', 'my_resetWarnings' )
  .addSeparator()
  
  .addItem( 'Show', 'my_showWarnings' )
  .addItem( 'hide', 'my_hideWarnings' );
  menu.addSubMenu( subMenu );
  
  subMenu = ui.createMenu( 'Data' )
  .addItem( 'Show', 'my_showData' )
  .addItem( 'Hide', 'my_hideData' );
  menu.addSubMenu( subMenu );
  
  menu.addToUi();
  
  // ===========================================================================
  // Workspaces 
  // ===========================================================================
  
  menu = ui.createMenu( 'Workspaces' )
  .addItem( 'Default', 'my_showDefault' )
  .addItem( 'Slim', 'my_showSlim' )
  .addItem( 'Simple', 'my_showSimple' )
  .addItem( 'Vimeo', 'my_showVimeo' )
  .addItem( 'List', 'my_showList' )
  .addItem( 'Archive', 'my_showArchive' );
  
  menu.addToUi();
  
  my_importMenu();
}
```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
