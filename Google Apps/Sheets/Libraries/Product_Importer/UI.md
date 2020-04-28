---
tags: [Notebooks/Google_Sheets/Libraries/Product_Importer]
title: UI
created: '2019-10-21T08:57:44.606Z'
modified: '2019-10-22T09:18:17.053Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)

## UI

```js
function onOpen() {
  my_initMenu();
}

function my_initMenu() {
  var ui = SpreadsheetApp.getUi();
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
  
  subMenu = ui.createMenu( 'Multi Bandings' )
  .addItem( 'Light & Dark', 'my_lightAndDarkBandings' )
  .addItem( 'Blue & Red', 'my_blueAndRedBandings' )
  menu.addSubMenu( subMenu );
  
  menu.addItem( 'Conditional Formatting', 'my_setConditionalFormatting' )
  .addSeparator()
  
  .addItem( 'All Cell Styles', 'my_setConditionalFormatting' )
  .addItem( 'Font Styles', 'my_setFontStyles' )
  .addItem( 'Alignment', 'my_setAlignment' )
  .addSeparator()
  
  .addItem( 'Borders', 'my_setBorderStyles' )
  .addToUi();
  
//------------------------------------------------------------------------------
  
  menu = ui.createMenu( 'Functions' )
  .addItem( 'Share Formula', 'my_shareFormula' )
  
  subMenu = ui.createMenu( 'Database' )
  .addItem( 'Show', 'my_showDatabase' )
  .addItem( 'Hide', 'my_hideDatabase' );
  menu.addSubMenu( subMenu );
  menu.addToUi();
  
//------------------------------------------------------------------------------
  
  menu = ui.createMenu( 'Workspaces' )
  .addItem( 'Default', 'my_showDefault' )
  .addItem( 'Slim', 'my_showSlim' )
  .addItem( 'Simple', 'my_showSimple' )
  .addItem( 'List', 'my_showList' )
  .addItem( 'Archive', 'my_showArchive' );
  menu.addToUi();
  
  my_importMenu();
}

```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_Importer/TOC.md)
