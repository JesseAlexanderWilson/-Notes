# Bandings
```JavaScript
//--------------------------------------------------------------------------------
// Abstraction Level 1
//--------------------------------------------------------------------------------

function MY_setBandings() {
  var sheet        = MY_getActiveSheet();
  var range        = sheet.getRange( 2, 1, sheet.getMaxRows(), sheet.getMaxColumns() );
  var bandingTheme = MY_BandingTheme.INFO;
  var showHeader   = true;
  var showFooter   = true; 
  
  MY_removeBandings( range );                         
  MY_applyRowBanding( range, bandingTheme, showHeader, showFooter );            
}

//--------------------------------------------------------------------------------
// Abstraction Level 2
//--------------------------------------------------------------------------------

function MY_applyRowBandingInfo() {
  var sheet        = MY_getActiveSheet();
  
  var range1       = sheet.getRange( 1, 1, 1, sheet.getMaxColumns() );
  var range2       = sheet.getRange( 2, 1, sheet.getMaxRows(), sheet.getMaxColumns() );
  
  var bandingTheme = MY_BandingTheme.INFO;
  var showHeader   = true;
  var showFooter   = true;

  MY_removeBandings( range1 );    
  MY_removeBandings( range2 );  
  MY_applyRowBanding( range1, bandingTheme, showHeader, showFooter );  
  MY_applyRowBanding( range2, bandingTheme, showHeader, showFooter ); 
}

//--------------------------------------------------------------------------------

function MY_applyRowBandingLight() {
  var range        = MY_getActiveSheetRange(); 
  var bandingTheme = MY_BandingTheme.LIGHT;
  var showHeader   = true;
  var showFooter   = true;
  
  MY_removeBandings( range );    
  MY_applyRowBanding( range, bandingTheme, showHeader, showFooter ); 
}

//--------------------------------------------------------------------------------

function MY_applyRowBandingDark() {
  var range        = MY_getActiveSheetRange(); 
  var bandingTheme = MY_BandingTheme.DARK;
  var showHeader   = true;
  var showFooter   = true;
  
  MY_removeBandings( range );    
  MY_applyRowBanding( range, bandingTheme, showHeader, showFooter );  
}

//--------------------------------------------------------------------------------
// Abstraction Level 3
//--------------------------------------------------------------------------------

function MY_removeBandings( range ) {
  if ( ! MY_isTemplateSheet() ) { return }
  
  range = (typeof range === "undefined") ? MY_getActiveSheetRange() : range;
  
  var bandings = range.getBandings();
  
  for( var i = 0; i < bandings.length; i++ ) {
    bandings[ 0 ].remove();
  } 
}

//--------------------------------------------------------------------------------

function MY_applyRowBanding( range, bandingTheme, showHeader, showFooter ) {
  if ( ! MY_isTemplateSheet() ) { return }
  
  var banding     = range.applyRowBanding();
  var headerColor = MY_BandingTheme.properties[ bandingTheme ].headerColor;
  var firstColor  = MY_BandingTheme.properties[ bandingTheme ].firstColor;
  var secondColor = MY_BandingTheme.properties[ bandingTheme ].secondColor;
  var footerColor = MY_BandingTheme.properties[ bandingTheme ].footerColor
  
  banding
  .setHeaderRowColor( ( showHeader === true ) ? headerColor : null ) // apply header if 'showHeader' is set to 'true'
  .setFirstRowColor( ( showHeader === true ) ? firstColor : secondColor ) // push down first color is 'showHeader' is not set to 'true'
  .setSecondRowColor( ( showHeader === true ) ? secondColor : firstColor ) // push down second color is 'showHeader' is not set to 'true'
  .setFooterRowColor( ( showFooter === true ) ? footerColor : null ); // apply footer if 'showFooter' is set to 'true'
}

//--------------------------------------------------------------------------------
// Abstraction Level 3
//--------------------------------------------------------------------------------

var MY_BandingTheme = {
  LIGHT: "light",
  DARK: "dark",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  properties: {
    light: {
      headerColor: "#BDBDBD",
      firstColor:  "#F9F9F9", 
      secondColor: "#F3F3F3",
      footerColor: "#DEDEDE"
    }, 
    dark: {
      headerColor: "#78909C",
      firstColor:  "#F4F7F8",
      secondColor: "#EBEFF1",
      footerColor: "#BBC8CE",
    }, 
    success: {
      headerColor: "#8BC34A",
      firstColor:  "#F6FBF1",
      secondColor: "#EEF7E3",
      footerColor: "#C4E2A0"
    }, 
    danger: {
      headerColor: "#E91D63",
      firstColor:  "#FEEDF3",
      secondColor: "#FDDCE8",
      footerColor: "#F68AB0"
    }, 
    warning: {
      headerColor: "#F7CB4D",
      firstColor:  "#FEFBF0",
      secondColor: "#FEF8E3",
      footerColor: "#FCE8B2"
    }, 
    info: {
      headerColor: "#4DD0E1",
      firstColor:  "#EFFBFC",
      secondColor: "#E0F7FA",
      footerColor: "#A2E8F1",
    } 
  }
};

Object.freeze( MY_BandingTheme );

//--------------------------------------------------------------------------------
```