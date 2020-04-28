---
tags: [Notebooks/ActiveCampaign]
title: UTM Tracking
created: '2019-10-23T08:09:32.549Z'
modified: '2019-10-23T08:09:43.540Z'
---

```js
<!-- Start of UTM Tracking - ActiveCampaign -->
<script>
  var urlParams;

  if ( window.location.search.indexOf( 'utm_source=' ) > -1 )
  {
    ( window.onpopstate = function ()
    {
      var match;
      var pl     = /\+/g;  // Regex for replacing addition symbol with a space
      var search = /([^&=]+)=?([^&]*)/g;

      var decode = function ( s ) {
        return decodeURIComponent( s.replace(pl, " ") );
      };

      var query     = window.location.search.substring( 1 );
      var cookieStr = '';

      var nowPreserve  = new Date();
      var oneYear      = 365 * 24 * 60 * 60 * 1000; // one year in milliseconds
      var thenPreserve = nowPreserve.getTime() + oneYear;

      nowPreserve.setTime( thenPreserve );

      var expireTime = nowPreserve.toUTCString();

      urlParams = {};

      while ( match = search.exec( query ) )
      {
        urlParams[ decode( match[ 1 ] ) ] = decode( match[ 2 ] );
        document.cookie = decode( match[ 1 ] ) + '=' + decode( match[ 2 ] ) + ';expires=' + expireTime + ';domain=' + document.domain;
      }
    }
    )();

    document.getElementsByName( 'field[17]' )[ 0 ].value = urlParams[ 'utm_source' ];
    document.getElementsByName( 'field[18]' )[ 0 ].value = urlParams[ 'utm_medium' ];
    document.getElementsByName( 'field[19]' )[ 0 ].value = urlParams[ 'utm_campaign' ];
    document.getElementsByName( 'field[20]' )[ 0 ].value = urlParams[ 'utm_term' ];
    document.getElementsByName( 'field[21]' )[ 0 ].value = urlParams[ 'utm_content' ];
  }
  else
  {
    function getCookieValue( a )
    {
      var b = document.cookie.match( '(^|;)\\s*' + a + '\\s*=\\s*([^;]+)' );
      return b ? b.pop() : '';
    }

    document.getElementsByName( 'field[17]' )[ 0 ].value = getCookieValue( 'utm_source' );
    document.getElementsByName( 'field[18]' )[ 0 ].value = getCookieValue( 'utm_medium' );
    document.getElementsByName( 'field[19]' )[ 0 ].value = getCookieValue( 'utm_campaign' );
    document.getElementsByName( 'field[20]' )[ 0 ].value = getCookieValue( 'utm_term' );
    document.getElementsByName( 'field[21]' )[ 0 ].value = getCookieValue( 'utm_content' );
  }
</script>
<!--End of UTM Tracking - ActiveCampaign -->
```
