```js
function MY_onOpenCreateMenu() {
  SpreadsheetApp
  .getUi()
  .createMenu( "My Menu" )
  .addItem( "[LABEL]", "[FUNCTION]" )
  .addToUi();
}
```