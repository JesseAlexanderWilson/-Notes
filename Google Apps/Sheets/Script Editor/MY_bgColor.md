# MY_bgColor
```JavaScript
function MY_bgColor() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  var totalRows    = sheet.getLastRow();
  var totalColumns = sheet.getLastColumn();
  
  var color = '';
  
  for (var i = 2; i <= totalRows; i++) {
    color = sheet.getRange(i, 2, 1, 1).getValue();
    sheet.getRange(i, 2, 1, 1).setBackground(color);
  }
  
  for (var i = 2; i <= totalRows; i++) {
    color = sheet.getRange(i, 3, 1, 1).getValue();
    sheet.getRange(i, 3, 1, 1).setBackground(color);
  }
}
```