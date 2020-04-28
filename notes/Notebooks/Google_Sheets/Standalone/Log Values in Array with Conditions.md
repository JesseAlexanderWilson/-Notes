---
tags: [Notebooks/Google_Sheets/Standalone]
title: Log Values in Array with Conditions
created: '2019-10-21T18:35:01.513Z'
modified: '2019-10-21T18:35:02.643Z'
---

``` js
for ( var i = 0; i < array_size; i++ ) {
  range[ i ] == 'value' ? Logger.log( i + ". Yes: " + range[ i ] ) : Logger.log( i + ". No: " + range[ i ] );
}

```
