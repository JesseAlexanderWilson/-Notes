---
tags: [Notebooks/Google_Sheets/Libraries/Product_ImporterV2]
title: Formatting-Banding
created: '2019-10-21T09:52:49.914Z'
modified: '2019-10-27T02:52:39.014Z'
---

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)

## Formatting-Banding

``` js
// =============================================================================
// Abstraction Level 1
// =============================================================================

/** ----------------------------------------------------------------------------
* Set Bandings
*/
function my_setBandings( color, showHeader, showFooter ) {
  color = color || 'LIGHT'
  showHeader = showHeader || true;
  showFooter = showFooter || false;
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName( 'Content' );
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var bandingTheme = BandingTheme[ color ];
  
  my_removeBandings( range );
  my_applyRowBanding( range, bandingTheme, showHeader, showFooter );
}

/** ----------------------------------------------------------------------------
* Remove Bandings
*/
function my_removeBandings( range ) {
  var bandings = range.getBandings();
  
  for each( var banding in bandings ) {
    banding.remove();
  }
}

/** ----------------------------------------------------------------------------
* Apply Row Bandings
*/
function my_applyRowBanding( range, bandingTheme, showHeader, showFooter ) {
  var banding     = range.applyRowBanding();
  var headerColor = BandingTheme.properties[ bandingTheme ].headerColor;
  var firstColor  = BandingTheme.properties[ bandingTheme ].firstColor;
  var secondColor = BandingTheme.properties[ bandingTheme ].secondColor;
  
  if ( showHeader === false ) {
    headerColor = null
    firstColor  = BandingTheme.properties[ bandingTheme ].firstColor;
    secondColor = BandingTheme.properties[ bandingTheme ].secondColor;
  }
  
  banding
  .setHeaderRowColor( headerColor )
  .setFirstRowColor( firstColor )
  .setSecondRowColor( secondColor )
}

// =============================================================================
// Abstraction Level 2
// =============================================================================

/** ----------------------------------------------------------------------------
* Apply Multiple Bandings
*/
//function my_applyMultipleBandings( color1, color2, header ) {
//  header = header || true;
//  
//  var doc      = my_getDocObj();
//  var color    = [ color1, color2 ];
//  
//  var setColor = 0;
//  var count = 2;
//  var checkpoint = 1;
//  
//  for ( var i = 1; i < doc.lastRow - 2; i++ ) {
//    if ( doc.values[ i ][ 0 ] !== doc.values[ i + 1 ][ 0 ] ) {
//      doc.range = doc.sheet.getRange( checkpoint, doc.firstColumn, count, doc.lastColumn );
//      my_setBandings( color[ setColor % 2 ], header, false, doc );
//      header = false;
//      setColor++;
//      checkpoint += count;
//      count = 0;
//    }
//    count++;
//  }
//  
//  if ( doc.values[ doc.lastRow - 2 ][ 0 ] !== doc.values[ doc.lastRow - 1 ][ 0 ] ) {
//    doc.range = doc.sheet.getRange( doc.lastRow, doc.firstColumn, 1, doc.lastColumn );
//    my_setBandings( color[ setColor % 2 ], false, false, doc );
//  }
//}

// =============================================================================
// Abstraction Level 3
// =============================================================================

/** ----------------------------------------------------------------------------
* Light and Dark Bandings
*/
//function my_lightAndDarkBandings() {
//  my_applyMultipleBandings( 'LIGHT', 'DARK', true );
//}

/** ----------------------------------------------------------------------------
* Blue and Red Bandings
*/
//function my_blueAndRedBandings() {
//  my_applyMultipleBandings( 'INFO', 'DANGER', true );
//}

/** ----------------------------------------------------------------------------
* Light Bandings
*/
function my_lightBandings() {
  my_setBandings( 'LIGHT' );
}

/** ----------------------------------------------------------------------------
* Dark Bandings
*/
function my_darkBandings() {
  my_setBandings( 'DARK' );
}

/** ----------------------------------------------------------------------------
* Success Bandings
*/
function my_successBandings() {
  my_setBandings( 'SUCCESS' );
}

/** ----------------------------------------------------------------------------
* Danger Bandings
*/
function my_dangerBandings() {
  my_setBandings( 'DANGER' );
}

/** ----------------------------------------------------------------------------
* Warning Bandings
*/
function my_warningBandings() {
  my_setBandings( 'WARNING' );
}

/** ----------------------------------------------------------------------------
* Info Bandings
*/
function my_infoBandings() {
  my_setBandings( 'INFO' );
}

// =============================================================================
// Abstraction Level 4
// =============================================================================

var BandingTheme = {
  LIGHT: "light",
  DARK: "dark",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  properties: {
    light: {
      headerColor: "#BDBDBD",
      firstColor: "#F9F9F9",
      secondColor: "#F3F3F3",
      footerColor: "#DEDEDE"
    },
    dark: {
      headerColor: "#78909C",
      firstColor: "#F4F7F8",
      secondColor: "#EBEFF1",
      footerColor: "#BBC8CE",
    },
    success: {
      headerColor: "#8BC34A",
      firstColor: "#F6FBF1",
      secondColor: "#EEF7E3",
      footerColor: "#C4E2A0"
    },
    danger: {
      headerColor: "#E91D63",
      firstColor: "#FEEDF3",
      secondColor: "#FDDCE8",
      footerColor: "#F68AB0"
    },
    warning: {
      headerColor: "#F7CB4D",
      firstColor: "#FEFBF0",
      secondColor: "#FEF8E3",
      footerColor: "#FCE8B2"
    },
    info: {
      headerColor: "#4DD0E1",
      firstColor: "#EFFBFC",
      secondColor: "#E0F7FA",
      footerColor: "#A2E8F1",
    }
  }
};

Object.freeze( BandingTheme );
```

[TOC](@note/Notebooks/Google_Sheets/Libraries/Product_ImporterV2/TOC.md)
