---

---

# Create Menu

Insert code below and then run function **onOpen**.

## Custom Menu.gs

``` javascript
/** ----------------------------------------------------------------------------
* On Open
*/
function onOpen() {
  MY_onOpenCreateMenu();
}

/** ----------------------------------------------------------------------------
* On Open Create Menu
*/
function OnOpenCreateMenu() {
    let menu;
    let subMenu;
    let ui = SpreadsheetApp.getUi();

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
}
```

## Further Reading

To create a custom menu inside a non-bound script use [Custom Menu Item With Triggers](Custom Menu Item With Triggers.md).